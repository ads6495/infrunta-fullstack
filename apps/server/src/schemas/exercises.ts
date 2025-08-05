import { z } from "zod";
import { ExerciseSchema, ExerciseTypeSchema, IdParamSchema } from "./common";

// Input schemas
export const CreateExerciseSchema = z.object({
  type: ExerciseTypeSchema,
  audioUrl: z.string().url().optional(),
  imageUrl: z.string().url().optional(),
  prompt: z.string().optional(),
  correctAnswer: z.string().min(1),
  englishTranslation: z.string().optional(),
  options: z.any().optional(), // JSON field - can be validated more specifically per exercise type
  letterGroups: z.any().optional(), // JSON field - for spelling/syllable exercises
  orderNumber: z.number().int().min(1),
  lessonId: z.number().int().positive()
});

export const UpdateExerciseSchema = CreateExerciseSchema.partial().extend({
  id: z.number().int().positive()
});

export const GetExercisesQuerySchema = z.object({
  lessonId: z.coerce.number().int().positive().optional(),
  type: ExerciseTypeSchema.optional()
});

export const SubmitExerciseAttemptSchema = z.object({
  exerciseId: z.number().int().positive(),
  answer: z.string().min(1)
});

// Output schemas
export const ExerciseResponseSchema = ExerciseSchema;

export const ExercisesListResponseSchema = z.array(ExerciseResponseSchema);

export const ExerciseWithLessonSchema = ExerciseResponseSchema.extend({
  lesson: z.object({
    id: z.number().int(),
    title: z.string(),
    unitId: z.number().int()
  })
});

export const ExerciseAttemptResponseSchema = z.object({
  id: z.string().uuid(),
  exerciseId: z.number().int(),
  answer: z.string(),
  correct: z.boolean(),
  timestamp: z.date()
});