'use client'
import { Button } from "@atena/ui/button";
import { Input } from "@atena/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useForm, zodResolver } from "@atena/ui/form"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@atena/ui/dialog";
import { z } from "zod";
import { api } from "@/trpc/react";
import { useCallback, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "@atena/ui/sonner";

export default function CreateCategory() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const util = api.useUtils()
  const createCategorySchema = z.object({
    title: z.string(),
    color: z.string().default(''),
  })
  const form = useForm<z.infer<typeof createCategorySchema>>({
    resolver: zodResolver(createCategorySchema),
  });
  const { mutateAsync: createCategory } = api.category.createCategory.useMutation();

  const handleSubmit = useCallback(async (values: z.infer<typeof createCategorySchema>) => {
    setLoading(true);
    try {
      await createCategory(values);
      await util.category.invalidate();
      form.reset();
      setOpen(false);
      toast.success('Category created successfully', {
        duration: 1500,
      });
    } catch (error) {
      setOpen(false);
      toast.error('Error creating category', {
        duration: 1500,
      });
    } finally {
      setLoading(false);
    }
  }, [createCategory, util, form]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">New Category</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
          <DialogDescription>Create category for yours transactions</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Category title..." {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl className="w-16">
                    <Input type="color" className="rounded-full" placeholder="Color of the category tag..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-end gap-4">
              <Button
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : 'Create'}
              </Button>
              <DialogClose>Cancel</DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}