import type { Config } from "drizzle-kit";

import { env } from "@atena/validators";

const uri = `
postgresql://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}
`;

export default {
  schema: "./src/schema",
  driver: "pg",
  dbCredentials: { connectionString: uri },
  tablesFilter: ["*"],
} satisfies Config;
