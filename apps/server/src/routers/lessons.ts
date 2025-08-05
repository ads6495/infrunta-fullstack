import { z } from "zod";
import prisma from "../../prisma";
import { protectedProcedure } from "../lib/orpc";
import {
  CreateLessonSchema,
  UpdateLessonSchema,
  GetLessonsQuerySchema,
  LessonResponseSchema,
  LessonsListResponseSchema
} from "../schemas/lessons";
import { IdParamSchema } from "../schemas/common";

export const lessonsRouter = {
  listLessons: protectedProcedure
    .input(GetLessonsQuerySchema)
    .output(LessonsListResponseSchema)
    .handler(async ({ input }) => {
      try {
        const where: any = {};
        if (input.unitId) where.unitId = input.unitId;
        if (input.premium !== undefined) where.premium = input.premium;

        const page = input.page ?? 1;
        const limit = input.limit ?? 10;
        const skip = (page - 1) * limit;

        const [lessons, total] = await Promise.all([
          prisma.lesson.findMany({
            where: Object.keys(where).length > 0 ? where : undefined,
            skip,
            take: limit,
            orderBy: { orderNumber: 'asc' }
          }),
          prisma.lesson.count({
            where: Object.keys(where).length > 0 ? where : undefined
          })
        ]);

        const totalPages = Math.ceil(total / limit);

        return {
          lessons,
          pagination: {
            page,
            limit,
            total,
            totalPages
          }
        };
      } catch (error) {
        console.error('Error fetching lessons:', error);
        throw new Error('Internal server error');
      }
    }),

  getLesson: protectedProcedure
    .input(IdParamSchema)
    .output(LessonResponseSchema)
    .handler(async ({ input }) => {
      try {
        const lesson = await prisma.lesson.findUnique({
          where: {
            id: input.id,
          },
        });
        if (!lesson) {
          throw new Error('Lesson not found');
        }
        return lesson;
      } catch (error) {
        console.error('Error fetching lesson:', error);
        throw error;
      }
    }),

  createLesson: protectedProcedure
    .input(CreateLessonSchema)
    .output(LessonResponseSchema)
    .handler(async ({ input }) => {
      try {
        const createdLesson = await prisma.lesson.create({
          data: input,
        });
        return createdLesson;
      } catch (error) {
        console.error('Error creating lesson:', error);
        throw new Error('Internal server error');
      }
    }),

  updateLesson: protectedProcedure
    .input(UpdateLessonSchema)
    .output(LessonResponseSchema)
    .handler(async ({ input }) => {
      try {
        const { id, ...lessonData } = input;
        const updatedLesson = await prisma.lesson.update({
          where: {
            id: id,
          },
          data: lessonData,
        });
        return updatedLesson;
      } catch (error) {
        console.error('Error updating lesson:', error);
        throw new Error('Internal server error');
      }
    }),

  deleteLesson: protectedProcedure
    .input(IdParamSchema)
    .output(z.object({ success: z.literal(true) }))
    .handler(async ({ input }) => {
      try {
        await prisma.lesson.delete({
          where: {
            id: input.id,
          },
        });
        return { success: true };
      } catch (error) {
        console.error('Error deleting lesson:', error);
        throw new Error('Internal server error');
      }
    }),
};
