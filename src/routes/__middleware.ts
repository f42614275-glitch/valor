import { createMiddleware } from "@tanstack/react-start";
import { startInstance } from "../start";

export const middleware = (createMiddleware() as any).handler(async (ctx: any) => {
  return await (startInstance as any).fetch(ctx.request, ctx.env);
});
