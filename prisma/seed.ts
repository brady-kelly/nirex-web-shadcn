import prisma from "@/lib/prisma";
import { seedContacts } from "./seed_contacts";
import { seedCategories } from "./seedCategories";
import { seedProducts } from "./seedProducts";

async function main() {
  await seedContacts();
  await seedCategories();
  await seedProducts();
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
