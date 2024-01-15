const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    const r = await database.category.createMany({
      data: [
        { 
          id: "76696e5a-c6f9-430e-a702-fa3f4f24fe7e",
          name: "Python" 
        },
        { 
          id: "838b5a2d-a2e3-4e9b-a5c9-3d992c59a775",
          name: "NodeJS" 
        },
        { 
          id: "15a44bad-d1a9-442b-a81f-87a51fa3c924",
          name: "Django" 
        },
      ],
      skipDuplicates: true,
    });
    console.log(`Success: ${r.count} categories created.`);
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();