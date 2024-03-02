import { integer, numeric, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { user } from ".";
import { category } from "./category";
import { relations } from "drizzle-orm";

export const transactionType = pgEnum("transaction_type", ["DEPOSIT", "WITHDRAWAL"]);

export const transaction = pgTable("transactions", {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => user.id, {
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),
  title: text('title').notNull(),
  description: text('description'),
  type: transactionType('type').default('DEPOSIT'),
  value: numeric('value').notNull(),
  category: integer('category').references(() => category.id, {
    onDelete: 'set null',
    onUpdate: 'set null',
  }),
});

export const transactionRelations = relations(transaction, ({ one }) => ({
  user: one(user),
  category: one(category),
}));