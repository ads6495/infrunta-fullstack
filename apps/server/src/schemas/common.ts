import { z } from "zod";

// Enums from Prisma schema
export const LevelSchema = z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]);

export const TierSchema = z.enum(["FREE", "PREMIUM", "PREMIUM_PLUS"]);

export const ExerciseTypeSchema = z.enum([
  "AUDIO_IMAGE_MATCH",
  "AUDIO_FILL_BLANK", 
  "WORD_USAGE_QUIZ",
  "SPELLING_BANK",
  "SYLLABLE_ASSEMBLY",
  "DRAG_MATCH",
  "PRONUNCIATION_CHALLENGE",
  "CONVERSATION_RESPONSE",
  "WORD_ORDER",
  "AUDIO_TYPING",
  "FIND_MISTAKE",
  "ALPHABET_OVERVIEW"
]);

// Common parameter schemas
export const IdParamSchema = z.object({
  id: z.coerce.number().int().positive()
});

// Base entity schemas
export const LanguageSchema = z.object({
  id: z.number().int(),
  code: z.string().min(2).max(5),
  name: z.string().min(1).max(100)
});

export const UnitSchema = z.object({
  id: z.number().int(),
  orderNumber: z.number().int(),
  title: z.string().min(1).max(200),
  level: LevelSchema,
  languageId: z.number().int(),
  objective: z.string().min(1)
});

export const LessonSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1).max(200),
  content: z.string().min(1),
  orderNumber: z.number().int(),
  premium: z.boolean().nullable(),
  unitId: z.number().int()
});

export const ExerciseSchema = z.object({
  id: z.number().int(),
  type: ExerciseTypeSchema,
  audioUrl: z.string().url().nullable(),
  imageUrl: z.string().url().nullable(),
  prompt: z.string().nullable(),
  correctAnswer: z.string().min(1),
  englishTranslation: z.string().nullable(),
  options: z.any().nullable(), // JSON field
  letterGroups: z.any().nullable(), // JSON field
  orderNumber: z.number().int(),
  lessonId: z.number().int()
});