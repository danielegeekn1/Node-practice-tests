import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  //prisma client queries in here
  //const user = await prisma.user.create({ data: { name: "Sally" } });
  const user = await prisma.user.findMany(); //this'll find all model properties which has been added until now
  console.log(user);
}
main()
  .catch((e) => console.log(e.message))
  .finally(async () => {
    await prisma.$disconnect(); // disconnect when we're done, is a best practice
  });
