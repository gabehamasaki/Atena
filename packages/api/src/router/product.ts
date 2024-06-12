import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { and, eq, product } from "@atena/db";

export const productRouter = createTRPCRouter({
  listAll: protectedProcedure.query(async ({ ctx }) => {
    const { session } = ctx;
    const { user } = session;

    const products = await     ctx.db.query.product.findMany({
      where: eq(product.userId, user.id),
      with: { user: true },
    })

    return products;
  }),
  store: protectedProcedure.input(z.object({
    name: z.string(),
    price: z.number(),
  })).mutation(async ({ ctx, input }) => {
    const { session } = ctx;
    const { user } = session;
    const { name, price } = input;

    const created = await ctx.db.insert(product).values({
      name,
      price,
      userId: user.id,
    }).returning({ id: product.id } );

    await new Promise((resolve) => setTimeout(resolve, 5000));

    return {
      message: 'Product created',
      product: created,
    };
  }),
  delete: protectedProcedure.input(z.object({ productId: z.number() })).mutation(async ({ ctx, input }) => {
    const { session, db } = ctx;
    const { user } = session;
    const { productId } = input;

    const productToDelete = await db.query.product.findFirst({
      where: and(eq(product.id, productId), eq(product.userId, user.id)),
    });

    if (!productToDelete) {
      throw new Error('Product not found');
    }

    await db.delete(product).where(eq(product.id, productToDelete.id));

    return {
      message: 'Product successfully deleted',
    };
  }),
});
