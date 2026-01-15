/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { zDesc, zName } from "@/lib/sharedSchemas";
import type z from "zod";
import { zfd } from "zod-form-data";

export const editCategorySchema = zfd.formData({
  id: zfd.numeric(),
  name: zfd.text(zName()),
  desc: zfd.text(zDesc()).optional(),
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
