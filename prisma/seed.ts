import prisma from "@/lib/prisma";
import { seedContacts } from "./seed_contacts";
import { seedCategories } from "./seedCategories";

async function main() {
  await seedContacts();
  await seedCategories();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
