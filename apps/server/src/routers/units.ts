import { z } from "zod";
import prisma from "../../prisma";
import { protectedProcedure } from "../lib/orpc";
import { 
  CreateUnitSchema, 
  UpdateUnitSchema, 
  GetUnitsQuerySchema, 
  GetUnitLessonsParamsSchema,
  UnitsListResponseSchema,
  UnitResponseSchema,
  UnitWithLessonsSchema 
} from "../schemas/units";
import { IdParamSchema, LevelSchema } from "../schemas/common";

export const unitsRouter = {
  listUnits: protectedProcedure
    .input(GetUnitsQuerySchema)
    .output(UnitsListResponseSchema)
    .handler(async ({ input }) => {
      try {
        const where: any = {};
        if (input.languageId) where.languageId = input.languageId;
        if (input.level) where.level = input.level;
        
        const units = await prisma.unit.findMany({
          where: Object.keys(where).length > 0 ? where : undefined
        });
        return units;
      } catch (error) {
        console.error('Error fetching units:', error);
        throw new Error('Internal server error');
      }
    }),
  
  getUnitLessons: protectedProcedure
    .input(GetUnitLessonsParamsSchema)
    .output(UnitWithLessonsSchema)
    .handler(async ({ input }) => {
      try {
        const unit = await prisma.unit.findUnique({
          where: { id: input.unitId },
        });

        if (!unit) {
          throw new Error('Unit not found');
        }

        const lessons = await prisma.lesson.findMany({
          where: { unitId: input.unitId },
          select: {
            id: true,
            title: true,
            orderNumber: true,
            premium: true
          }
        });

        return {
          ...unit,
          lessons
        };
      } catch (error) {
        console.error('Error fetching unit lessons:', error);
        throw error;
      }
    }),
  
  createUnit: protectedProcedure
    .input(CreateUnitSchema)
    .output(UnitResponseSchema)
    .handler(async ({ input }) => {
      try {
        const createdUnit = await prisma.unit.create({
          data: input,
        });
        return createdUnit;
      } catch (error) {
        console.error('Error creating unit:', error);
        throw new Error('Internal server error');
      }
    }),
  
  updateUnit: protectedProcedure
    .input(UpdateUnitSchema)
    .output(UnitResponseSchema)
    .handler(async ({ input }) => {
      try {
        const { id, ...unitData } = input;
        const updatedUnit = await prisma.unit.update({
          where: {
            id: id,
          },
          data: unitData,
        });
        return updatedUnit;
      } catch (error) {
        console.error('Error updating unit:', error);
        throw new Error('Internal server error');
      }
    }),
  
  deleteUnit: protectedProcedure
    .input(IdParamSchema)
    .output(z.object({ success: z.literal(true) }))
    .handler(async ({ input }) => {
      try {
        await prisma.unit.delete({
          where: {
            id: input.id,
          },
        });
        return { success: true };
      } catch (error) {
        console.error('Error deleting unit:', error);
        throw new Error('Internal server error');
      }
    }),

  getUnitsByLevel: protectedProcedure
    .input(LevelSchema)
    .output(UnitsListResponseSchema)
    .handler(async ({ input }) => {
      try {
        const units = await prisma.unit.findMany({
          where: {
            level: input,
          },
          include: {
            lessons: {
              select: {
                id: true,
                title: true,
                premium: true,
              },
            },
          },
        });
        return units;
      } catch (error) {
        console.error('Error fetching units by level:', error);
        throw new Error('Internal server error');
      }
    }),
};
