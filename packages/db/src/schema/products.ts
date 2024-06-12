
import { relations } from 'drizzle-orm'
import { integer, pgTable, serial, text, uuid } from 'drizzle-orm/pg-core'

import { orderProduct, user } from '.'

export const product = pgTable(
  'products',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    price: integer('price').notNull(),
    description: text('description'),
    userId: uuid('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  },
)

export const productRelations = relations(product, ({ one, many }) => ({
  user: one(user, {
    fields: [product.userId],
    references: [user.id],
  }),

  orders: many(orderProduct)
}))