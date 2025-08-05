import { protectedProcedure, publicProcedure } from "../lib/orpc";
import { unitsRouter } from "./units";
import { lessonsRouter } from "./lessons";
import { exercisesRouter } from "./exercises";
import { languagesRouter } from "./languages";

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
  languages: languagesRouter,
  units: unitsRouter,
  lessons: lessonsRouter,
  exercises: exercisesRouter,
};
export type AppRouter = typeof appRouter;
