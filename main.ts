import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const port = 3000;
app.use((ctx) => {
  ctx.response.body = "Hello World!";
});
console.log('Server running on ' + port)
app.listen({ port });
