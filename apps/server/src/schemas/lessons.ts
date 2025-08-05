import { z } from "zod";
import { LessonSchema, IdParamSchema } from "./common";

// Input schemas
export const CreateLessonSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1),
  orderNumber: z.number().int().min(1),
  premium: z.boolean().default(false),
  unitId: z.number().int().positive()
});

export const UpdateLessonSchema = CreateLessonSchema.partial().extend({
  id: z.number().int().positive()
});

export const GetLessonsQuerySchema = z.object({
  unitId: z.coerce.number().int().positive().optional(),
  premium: z.coerce.boolean().optional()
});

// Output schemas
export const LessonResponseSchema = LessonSchema;

export const LessonsListResponseSchema = z.array(LessonResponseSchema);

export const LessonWithExercisesSchema = LessonResponseSchema.extend({
  exercises: z.array(z.object({
    id: z.number().int(),
    type: z.string(),
    orderNumber: z.number().int(),
    prompt: z.string().nullable()
  }))
});

export const LessonWithUnitSchema = LessonResponseSchema.extend({
  unit: z.object({
    id: z.number().int(),
    title: z.string(),
    level: z.string()
  })
});