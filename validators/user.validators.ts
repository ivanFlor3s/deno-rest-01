import { prismaClient } from "../core/cliente.ts";
export const checkAlreadyExist = async (email: string) => {
  const found = await prismaClient.user.findUnique({
    where: {
      email,
    },
  });
  console.log("findd", { found });
  return !!found;
};
