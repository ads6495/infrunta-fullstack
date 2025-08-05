import { z } from "zod";
import prisma from "../../prisma";
import { protectedProcedure } from "../lib/orpc";
import {
  CreateExerciseSchema,
  UpdateExerciseSchema,
  GetExercisesQuerySchema,
  ExerciseResponseSchema,
  ExercisesListResponseSchema
} from "../schemas/exercises";
import { IdParamSchema } from "../schemas/common";

export const exercisesRouter = {
  listExercises: protectedProcedure
    .input(GetExercisesQuerySchema)
    .output(ExercisesListResponseSchema)
    .handler(async ({ input }) => {
      try {
        const where: any = {};
        if (input.lessonId) where.lessonId = input.lessonId;
        if (input.type) where.type = input.type;
        
        const exercises = await prisma.exercise.findMany({
          where: Object.keys(where).length > 0 ? where : undefined
        });
        return exercises;
      } catch (error) {
        console.error('Error fetching exercises:', error);
        throw new Error('Internal server error');
      }
    }),

  getExercise: protectedProcedure
    .input(IdParamSchema)
    .output(ExerciseResponseSchema)
    .handler(async ({ input }) => {
      try {
        const exercise = await prisma.exercise.findUnique({
          where: {
            id: input.id,
          },
        });
        if (!exercise) {
          throw new Error('Exercise not found');
        }
        return exercise;
      } catch (error) {
        console.error('Error fetching exercise:', error);
        throw error;
      }
    }),

  createExercise: protectedProcedure
    .input(CreateExerciseSchema)
    .output(ExerciseResponseSchema)
    .handler(async ({ input }) => {
      try {
        const { options, letterGroups, ...rest } = input;
        const createdExercise = await prisma.exercise.create({
          data: {
            ...rest,
            options: options ? JSON.parse(JSON.stringify(options)) : undefined,
            letterGroups: letterGroups
              ? JSON.parse(JSON.stringify(letterGroups))
              : undefined,
          },
        });
        return createdExercise;
      } catch (error) {
        console.error('Error creating exercise:', error);
        throw new Error('Internal server error');
      }
    }),

  updateExercise: protectedProcedure
    .input(UpdateExerciseSchema)
    .output(ExerciseResponseSchema)
    .handler(async ({ input }) => {
      try {
        const { id, options, letterGroups, ...rest } = input;
        const updatedExercise = await prisma.exercise.update({
          where: {
            id: id,
          },
          data: {
            ...rest,
            options: options ? JSON.parse(JSON.stringify(options)) : undefined,
            letterGroups: letterGroups
              ? JSON.parse(JSON.stringify(letterGroups))
              : undefined,
          },
        });
        return updatedExercise;
      } catch (error) {
        console.error('Error updating exercise:', error);
        throw new Error('Internal server error when updating exercise');
      }
    }),

  deleteExercise: protectedProcedure
    .input(IdParamSchema)
    .output(z.object({ success: z.literal(true) }))
    .handler(async ({ input }) => {
      try {
        await prisma.exercise.delete({
          where: {
            id: input.id,
          },
        });
        return { success: true };
      } catch (error) {
        console.error('Error deleting exercise:', error);
        throw new Error('Internal server error when deleting exercise');
      }
    }),
};
