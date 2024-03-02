'use client'
import { Table, TableBody, TableCell, TableEmptyRow, TableHead, TableHeader, TableLoadingRow, TableRow } from '@atena/ui/table'
import { api } from "@/trpc/react";
import { Button } from '@atena/ui/button';
import { Badge } from '@atena/ui/badge';
import { Pencil, Trash } from 'lucide-react';

export default function CategoriesTable() {
  const util = api.useUtils();
  const { data: categories, isLoading } = api.category.getCategories.useQuery();
  const { mutateAsync: deleteCategory } = api.category.deleteCategory.useMutation();

  const handleDelete = async (id: number) => {
    await deleteCategory({ categoryId: id }).then(async () => {
      await util.category.invalidate();
    });
  }
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead style={{ width: 24 }}>ID</TableHead>
            <TableHead style={{ width: 420 }}>Category</TableHead>
            <TableHead style={{ width: 24 }}>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableLoadingRow colSpan={3} />
          ) : categories && categories.length > 0 ? (
            categories.map((category) => (
              <CategoryRow key={category.id} category={category} handleDelete={handleDelete} handleEdit={handleDelete} />
            ))
          ) : (
            <TableEmptyRow message="No categories found" colSpan={3} />
          )}
        </TableBody>
      </Table>
    </div >
  )
}

interface CategoryRowProps {
  category: {
    id: number;
    title: string;
  };
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}

const CategoryRow = ({ category, handleDelete, handleEdit }: CategoryRowProps) => (
  <TableRow key={category.id} className="font-medium text-primary outline-none h-14">
    <TableCell>{category.id}</TableCell>
    <TableCell>
      <Badge>{category.title}</Badge>
    </TableCell>
    <TableCell className='space-x-4'>
      <Button onClick={() => handleDelete(category.id)} variant="destructive" size="icon" className='size-7'>
        <Trash className='size-4' />
      </Button>
      <Button onClick={() => handleEdit(category.id)} size="icon" className='size-7'>
        <Pencil className='size-4' />
      </Button>
    </TableCell>
  </TableRow>
);
