import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

import * as auth from "./schema/auth";
import { env } from "@atena/validators";

export const schema = { ...auth };
export { pgTable as tableCreator } from 'drizzle-orm/pg-core'

export * from "drizzle-orm";

const URL = `postgresql://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}${env.NODE_ENV == 'production' ?? '?sslmode=require'}`;

const client = new Client({
  connectionString: URL,
});

export const db = drizzle(client, {
  schema
});


