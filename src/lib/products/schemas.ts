import z from "zod";

export const updateSchema = z.object({
  id: z.string(),
  categoryId: z.string(),
  name: z.string(),
  variant: z.string().optional(),
  desc: z.string().optional(),
  workingSize: z.string().optional(),
  packageSize: z.string().optional(),
  volume: z.string().optional(),
  packageWeight: z.string().optional(),
  imageFile: z.string().optional(),
  localPrice: z.number().optional(),
});
