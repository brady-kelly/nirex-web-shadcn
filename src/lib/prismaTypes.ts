import type { Prisma } from "../../generated/prisma/client";

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
  include: { products: true };
}>;

export type ProductWithCategory = Prisma.ProductGetPayload<{
  include: { category: true };
}>;
