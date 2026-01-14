// biome-ignore assist/source/organizeImports: fefewf
import { promises as fs } from "fs";
import type { SiteContactItem } from "@/lib/config/contactItem";
import prisma from "@/lib/prisma";

export async function seedContacts() {
  const json = await fs.readFile("data/siteContacts.json", "utf8");
  const contacts = JSON.parse(json) as SiteContactItem[];

  for (const contact of contacts) {
    await prisma.siteContact.upsert({
      where: {
        name: contact.name,
        type: contact.type,
      },
      update: {
        value: contact.value,
      },
      create: {
        name: contact.name,
        type: contact.type,
        value: contact.value,
      },
    });
  }
}
