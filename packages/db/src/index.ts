import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as auth from "./schema/auth";
import * as post from "./schema/post";
import { env } from "@atena/validators";

export const schema = { ...auth, ...post };

export * from "drizzle-orm";

const URL = `
  postgresql://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}?sslmode=require
`;

const sql = neon(URL);

export const db = drizzle(sql, {
  schema
});


