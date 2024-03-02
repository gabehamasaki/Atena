import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { user } from ".";

export const category = pgTable("categories", {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  color: text('color'),
  userId: uuid('user_id').notNull().references(() => user.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
})

export const categoryRelations = relations(category, ({ many, one }) => ({
  userId: one(user),
  categories: many(category),
}))