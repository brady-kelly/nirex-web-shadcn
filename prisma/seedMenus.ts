import { headerMenuItems } from "@/lib/config/headerMenuItems";
import prisma from "@/lib/prisma";

export async function seedMenus() {
  const headerItems = headerMenuItems;

  await prisma.siteConfig.upsert({
    where: {
      name: "current",
    },
    update: {
      headerMenuItems: JSON.stringify(headerItems),
    },
    create: {
      name: "current",
      headerMenuItems: JSON.stringify(headerItems),
    },
  });
}
