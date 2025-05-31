import db from "@/utils/db";

async function AboutPage() {
  const profile = await db.testProfile.create({
    data: {
      name: "random name",
      age: 20,
    },
  });

  const users = await db.testProfile.findMany();

  return (
    <div>
      {users.map((user) => {
        return <h2 key={user.id}>{user.name}</h2>;
      })}
    </div>
  );
}
export default AboutPage;
