
import { relations } from 'drizzle-orm'
import { integer, pgTable, text, uuid, serial, timestamp } from 'drizzle-orm/pg-core'

import { product, user } from '.'

export const order = pgTable(
  'orders',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    price: integer('price').notNull(),
    description: text('description'),
    sellerId: uuid('seller_id').notNull().references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    buyerId: uuid('buyer_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    createdAt: timestamp('created_at', { mode: "date" }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { mode: "date" }).notNull().defaultNow(),
  },
)

export const orderRelations = relations(order, ({ one, many }) => ({
  seller: one(user, {
    fields: [order.sellerId],
    references: [user.id],
  }),
  buyer: one(user, {
    fields: [order.buyerId],
    references: [user.id],
  }),

  products: many(orderProduct)
}))

export const orderProduct = pgTable(
  'order_products',
  {
    id: serial('id').primaryKey(),
    orderId: uuid('order_id').notNull().references(() => order.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    productId: integer('product_id').notNull().references(() => product.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    quantity: integer('quantity').notNull(),
  },
);

export const orderProductRelations = relations(orderProduct, ({ one }) => ({
  order: one(order, {
    fields: [orderProduct.orderId],
    references: [order.id],
  }),
  product: one(product, {
    fields: [orderProduct.productId],
    references: [product.id],
  })
}))

