import { defineConfig } from "drizzle-kit";
// import { config } from "dotenv";
//
// const env = config();2
//
// if (env["DATABASE_URL"]) {
//     Deno.env.set("DATABASE_URL", env["DATABASE_URL"]);
// }
const env = typeof Deno !== "undefined" ? Deno.env.toObject() : process.env;

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // url: Deno.env.get("DATABASE_URL")!,
    url: env.DATABASE_URL?.toString() || "",
  },
});
