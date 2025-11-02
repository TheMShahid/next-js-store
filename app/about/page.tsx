async function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl sm:text-6xl font-bold leading-none tracking-wide">
        We Love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          store
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea unde
        molestiae distinctio quam, labore fuga illo earum dolore doloremque
        ratione aperiam at, corrupti in expedita deserunt hic numquam delectus.
      </p>
    </section>
  );
}

export default AboutPage;

// import db from "@/utils/db";

// async function AboutPage() {
//   const profile = await db.testProfile.create({
//     data: {
//       name: "random name",
//     },
//   });

//   const users = await db.testProfile.findMany();

//   return (
//     <div>
//       {users.map((user) => {
//         return (
//           <h2 key={user.id} className="text-2xl font-bold">
//             {user.name}
//           </h2>
//         );
//       })}
//     </div>
//   );
// }

// export default AboutPage;
