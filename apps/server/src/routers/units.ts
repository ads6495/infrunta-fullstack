import z from "zod";
import prisma from "../../prisma";
import type { Unit } from "prisma/generated/client";
import { protectedProcedure } from "../lib/orpc";

export const unitsRouter = {
    getUnits: protectedProcedure.handler(async () => {
        const units: Unit[] = await prisma.unit.findMany({});
        return units;
    }),
}