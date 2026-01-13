/** biome-ignore-all assist/source/organizeImports: <explanation> */
import prisma from "@/lib/prisma";
import type { MenuItemDetails } from "@/components/shared/menuItem";

export async function getHeaderMenuItems(): Promise<MenuItemDetails[]> {
  const headerMenuJson = await prisma.siteConfig.findUnique({
    where: {
      name: "current",
    },
    select: {
      headerMenuItems: true,
    },
  });
  const itemsObject =
    headerMenuJson?.headerMenuItems as unknown as MenuItemDetails[];

  return itemsObject;
}
