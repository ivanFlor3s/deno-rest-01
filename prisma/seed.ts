import { config, DotenvConfig } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";

const envVars: DotenvConfig = await config();

const prisma = new PrismaClient({
    datasources: {
        db:{
            url: envVars.DATABASE_PROXY_PRISMA_URL
        }
    }
})

const usuarioData: Prisma.UserCreateInput[]=[
    {
        email:' test@gmail.com',
        hash: '',
    },
    {
        email:' test123@gmail.com',
        hash: '',
    },
    {
        email:' test456@gmail.com',
        hash: '',
    }
]

for (const u of usuarioData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
  
  await prisma.$disconnect();