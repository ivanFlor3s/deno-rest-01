import { Context, Router, Status } from "https://deno.land/x/oak/mod.ts";
import * as authController from "../controllers/auth.controller.ts";

import * as usersController from "../controllers/users.controller.ts";
import { isEmail } from "https://deno.land/x/validasaur/mod.ts";
import * as userValidators from "../validators/user.validators.ts";

export const routes = new Router();
//USERS
routes.get("/users", usersController.listarUsuarios);
routes.get("/users/asd", usersController.getUser);

//AUTH
routes.post("/auth/register", async (ctx: Context) => {
  const reqBody = await ctx.request.body().value;
  ctx.assert(!!reqBody.email, Status.BadRequest, "Email NOT FOUND");
  ctx.assert(!!reqBody.password, Status.BadRequest, "password NOT FOUND");
  ctx.assert(!(reqBody.password.length > 8), Status.Forbidden, "Contrasena debe tener mas de 8 caracteres")
  ctx.assert(!isEmail(reqBody.email), Status.BadRequest, "Email invalido");
  ctx.assert(
    !(await userValidators.checkAlreadyExist(reqBody.email)),
    Status.Forbidden,
    "Ya existe un usuario con este email"
  );
  return authController.register(ctx);
});
