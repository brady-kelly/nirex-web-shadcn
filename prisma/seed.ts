import prisma from "@/lib/prisma";
import { seedMenus } from "./seedMenus";

async function main() {
  //await seedContacts();
  //await seedCategories();
  //await seedProducts();
  await seedMenus();
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
