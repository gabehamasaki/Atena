import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@atena/validators";

import * as schema from './schema'
export * from './schema'

const URL = `postgresql://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}`;

const client = postgres(URL);

export const db = drizzle(client, {
  schema,
});
