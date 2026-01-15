import z from "zod";

export const zName = () =>
  z
    .string()
    .min(10, "Name must be at least 5 characters.")
    .max(75, "Name must be at most 100 characters.");

export const zDesc = () =>
  z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters.");
