import z from "zod";
import { zfd } from "zod-form-data";
import { zDesc, zName } from "../../sharedSchemas";

const attMinLen = 10;
const attMaxLen = 50;
const attMinText = `Attribute must be at least ${attMinLen} characters.`;
const attMaxText = `Attribute must be at least ${attMaxLen} characters.`;

const zAtt = () =>
  z.string().min(attMinLen, attMinText).max(attMaxLen, attMaxText).optional();

export const editproductSchema = zfd.formData({
  id: zfd.numeric(),
  categoryId: zfd.numeric(),
  name: zfd.text(zName()),
  variant: zfd.text(z.string().optional()),
  desc: zfd.text(zDesc().optional()),
  workingSize: zfd.text(zAtt()).optional(),
  packageSize: zfd.text(zAtt()).optional(),
  volume: zfd.text(z.string().optional()),
  packageWeight: zfd.text(zAtt()).optional(),
  imageFile: zfd
    .text(
      z
        .string()
        .min(2, "Filename must be at least 2 characters")
        .max(255, "Filename must be at most 255 characters")
    )
    .optional(),
  localPrice: zfd.numeric(),
});

export type EditProductFormState = {
  values?: z.infer<typeof editproductSchema>;
  errors:
    | {
        id?: string[];
        categoryId?: string[];
      }
    | undefined;
  success: boolean;
};
