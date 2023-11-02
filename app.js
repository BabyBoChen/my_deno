import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { view } from "./viewEngine.js";

const router = new Router();
router.get("/", async function(ctx) {
    ctx.response.body = await view("views/index.html");
});

const app = new Application();
app.use(router.allowedMethods());
app.use(router.routes());
app.use(async function(ctx, next){
    try {
        await ctx.send({
            root: `${Deno.cwd()}/statics`,
        });
    } catch {
        next();
    }
});

await app.listen({
    hostname:"0.0.0.0",
    port: 8080,
});

