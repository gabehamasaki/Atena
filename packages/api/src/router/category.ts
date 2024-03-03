import { and, category, db, eq } from "@atena/db";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";


export const categoryRouter = createTRPCRouter({
  getCategories: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const categories = await db.query.category.findMany({
      where: (category) => eq(category.userId, userId),
    })

    return categories
  }),

  createCategory: protectedProcedure.input(z.object({
    title: z.string(),
    color: z.string().nullable()
  })).mutation(async ({ ctx, input }) => {
    const { title, color } = input
    const userId = ctx.session.user.id;

    await db.insert(category).values({
      title,
      color,
      userId
    })
  }),

  editCategory: protectedProcedure.input(z.object({
    categoryId: z.number(),
    title: z.string().nullable(),
    color: z.string().nullable()
  })).mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user.id;
    const { categoryId, title, color } = input

    await db.update(category).set({
      title: title ? title : undefined,
      color: color
    }).where(and(eq(category.userId, userId), eq(category.id, categoryId)))
  }),

  deleteCategory: protectedProcedure.input(z.object({
    categoryId: z.number()
  })).mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user.id;
    const { categoryId } = input;

    await db.delete(category).where(and(eq(category.userId, userId), eq(category.id, categoryId)))
  })
})