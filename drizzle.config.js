import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:ZpsnmOq7tU9i@ep-green-morning-a5j6ql0a.us-east-2.aws.neon.tech/customizr?sslmode=require",
  }
});