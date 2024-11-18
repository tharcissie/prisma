import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //await prisma.user.deleteMany({});
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Alice",
  //       email: "alice@gmail.com",
  //       password: "123",
  //       UserPreference: {
  //         create: {
  //           emailUpates: true,
  //         },
  //       },
  //     },
  //     select: {
  //       name: true,
  //       UserPreference: {
  //         select: {
  //           emailUpates: true,
  //         },
  //       },
  //     },
  //   });

  // const user = await prisma.user.findUnique({
  //     where: {
  //         id: "jssj"
  //     },
  //     select: {
  //         name: true,
  //         UserPreference: {
  //             select: {
  //                 emailUpates: true
  //             }
  //         }
  //     }
  // })

  // const user = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Alice",
  //       email: "alice@gmail.com",
  //       password: "123",
  //     },
  //     {
  //       name: "Dudu",
  //       email: "Du@gmail.com",
  //       password: "1239",
  //     },
  //     {
  //       name: "ganza",
  //       email: "ganza@gmail.com",
  //       password: "123",
  //     },
  //     {
  //       name: "ange",
  //       email: "hey@gmail.com",
  //       password: "1239",
  //     },
  //   ],
  // });

  //   const user = await prisma.user.findMany({
  //     where: {
  //       name: {
  //         contains: "a",
  //       },
  //     },
  //     orderBy: {
  //       name: "asc",
  //     },
  //   });

  const user = await prisma.user.update({
    where: {
      email: "alice@gmail.com",
    },
    data: {
      name: "Chuchu",
      UserPreference: {
        connect: {
          id: "cm3mvp2vd000170187d4b3gzs",
        },
      },
    },
  });

  console.log(user);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
