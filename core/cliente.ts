import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import {
  config,
  DotenvConfig,
} from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars: DotenvConfig = await config();

export const prismaClient = new PrismaClient({
  datasources: {
    db: { url: envVars.DATABASE_PROXY_PRISMA_URL },
  },
});
