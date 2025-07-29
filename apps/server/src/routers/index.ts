import { protectedProcedure, publicProcedure } from "../lib/orpc";
import { unitsRouter } from "./units";

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return "OK";
  }),
  privateData: protectedProcedure.handler(({ context }) => {
    return {
      message: "This is private",
      user: context.session?.user,
    };
  }),
  units: unitsRouter,
};
export type AppRouter = typeof appRouter;
