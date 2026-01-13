/** biome-ignore-all assist/source/organizeImports: <explanation> */
import type { MenuItemDetails } from "@/components/shared/menuItem";
import { headerMenuItems } from "@/lib/config/headerMenuItems";

export async function getHeaderMenuItems(): Promise<MenuItemDetails[]> {
  // TODO: Fix reading menu items.
  // const headerMenuJson = await prisma.siteConfig.findUnique({
  //   where: {
  //     name: "current",
  //   },
  //   select: {
  //     headerMenuItems: true,
  //   },
  // });
  // const itemsObject =
  //   headerMenuJson?.headerMenuItems as unknown as MenuItemDetails[];

  return headerMenuItems;
}
