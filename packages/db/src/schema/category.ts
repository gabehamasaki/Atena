import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const category = pgTable("categories", {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  color: text('color'),
})

export const categoryRelations = relations(category, ({ many }) => ({
  categories: many(category),
}))