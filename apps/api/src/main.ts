import { Application } from "jsr:@oak/oak/application";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Piper is up and running!";
})

console.log("Server is running on http://localhost:8000");

await app.listen({ port: 8000 });