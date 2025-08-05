import { IdParamSchema } from "@/schemas/common";
import { protectedProcedure } from "../lib/orpc";

export const levelsRouter = {
  getLevelUnits: protectedProcedure
    .input(IdParamSchema)
    .handler(async ({ input }) => {
      return { message: "getLevelUnits stub", levelId: input?.id };
    }),
};
