// biome-ignore assist/source/organizeImports: fefewf
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { SiteContactDetails } from "../data/siteConfig";

const adapter = new PrismaPg({
  connectionString: "postgres://admin:eNyRFrfr9Tdr7l@localhost:5432/nirex-tech",
});
const prisma = new PrismaClient({ adapter });
async function main() {
  const contacts = SiteContactDetails;
  for (const contact of contacts) {
    const cont = await prisma.siteContacts.create({
      data: {
        name: contact.name,
        type: contact.type,
        value: contact.value,
      },
    });
    console.log(`Created contact: ${cont.name} - ${cont.type}`);
  }
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
