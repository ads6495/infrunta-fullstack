import { z } from "zod";
import prisma from "../../prisma";
import { publicProcedure } from "../lib/orpc";
import { LanguageSchema } from "../schemas/common";

export const languagesRouter = {
  getAllLanguages: publicProcedure
    .output(z.array(LanguageSchema))
    .handler(async () => {
      try {
        const languages = await prisma.language.findMany({
          orderBy: {
            name: 'asc'
          }
        });
        return languages;
      } catch (error) {
        console.error('Error fetching languages:', error);
        throw new Error('Internal server error');
      }
    })
};