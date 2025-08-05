import { z } from "zod";
import { UnitSchema, LevelSchema, IdParamSchema } from "./common";

// Input schemas
export const CreateUnitSchema = z.object({
  orderNumber: z.number().int().min(1),
  title: z.string().min(1).max(200),
  level: LevelSchema.default("A1"),
  languageId: z.number().int().positive(),
  objective: z.string().min(1)
});

export const UpdateUnitSchema = CreateUnitSchema.partial().extend({
  id: z.number().int().positive()
});

export const GetUnitsQuerySchema = z.object({
  languageId: z.coerce.number().int().positive().optional(),
  level: LevelSchema.optional()
});

export const GetUnitLessonsParamsSchema = z.object({
  unitId: z.coerce.number().int().positive()
});

// Output schemas
export const UnitResponseSchema = UnitSchema;

export const UnitsListResponseSchema = z.array(UnitResponseSchema);

export const UnitWithLessonsSchema = UnitResponseSchema.extend({
  lessons: z.array(z.object({
    id: z.number().int(),
    title: z.string(),
    orderNumber: z.number().int(),
    premium: z.boolean().nullable()
  }))
});