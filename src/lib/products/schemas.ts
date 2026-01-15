import z from "zod";
import { zfd } from "zod-form-data";

export const editproductSchema = z.object({
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

export const editCategorySchema = zfd.formData({
  id: zfd.numeric(),
  name: z
    .string()
    .min(10, "Name must be at least 5 characters.")
    .max(30, "Name must be at most 32 characters."),
  desc: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

export type EditCategoryFormState = {
  values?: z.infer<typeof editCategorySchema>;
  errors:
    | {
        id?: string[];
        name?: string[];
        desc?: string[];
      }
    | undefined;
  success: boolean;
};
