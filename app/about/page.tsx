async function AboutPage() {
  return (
    <div>
      <h1>about page</h1>
    </div>
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
