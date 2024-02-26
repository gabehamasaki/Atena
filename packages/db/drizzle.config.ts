import { env } from "@atena/validators";
import type { Config } from "drizzle-kit";

const uri = `
postgresql://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}?sslmode=require
`;

export default {
  schema: "./src/schema",
  driver: "pg",
  dbCredentials: { connectionString: uri },
  tablesFilter: ["t3turbo_*"],
} satisfies Config;
