import joi from "joi";

const numberStringSchema = joi.string().regex(/^[0-9]+$/).required();
const normalStringSchema = joi.string().min(3).max(500).required();

export const profileSchema = joi.object({
    name: normalStringSchema,
    power: normalStringSchema,
    alias: normalStringSchema,
    age: numberStringSchema,
    sex: joi.string().valid("male", "female").required(),
})

export const profileUpdateSchema = joi.object().keys({
    name: joi.string().optional(),
    power: joi.string().optional(),
    alias: joi.string().optional(),
    age: joi.string().optional(),
    sex: joi.string().valid("male", "female"),
})

export const profileIdSchema = numberStringSchema;
