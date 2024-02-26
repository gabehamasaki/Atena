import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

import { env } from "@atena/validators";

import * as auth from "./schema/auth";

export const schema = { ...auth };
export { pgTable as tableCreator } from "drizzle-orm/pg-core";

export * from "drizzle-orm";

const URL = `postgresql://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}`;

const client = new Client({
  connectionString: URL,
});

export const db = drizzle(client, {
  schema,
});
