'use client';
import { api } from "@/trpc/react";
import { Button } from "@atena/ui/button";
import { Loader, PlusCircle } from "lucide-react";

export default function AddProductButton() {
  const utils = api.useUtils();
  const store = api.product.store.useMutation();
  const handleAddProduct = async () => {
    await store.mutateAsync({
      name: 'New Product',
      price: 1000,
    })

    await utils.product.listAll.invalidate();
  }


  return (
    <Button size="sm" className="h-8 gap-1 w-32" onClick={() => handleAddProduct()} disabled={store.isPending}>
      {store.isPending ? '' : <PlusCircle className="h-3.5 w-3.5" />}
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        {store.isPending ? <Loader className="animate-spin h-3.5 w-3.5" /> : 'Add Product'}
      </span>
    </Button>
  )
} 