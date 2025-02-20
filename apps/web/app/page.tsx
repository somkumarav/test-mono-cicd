import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const data = await prismaClient.user.findFirst();

  return (
    <div>
      <p>Hello World!</p>
      <p>username: {data?.username}</p>
      <p>password: {data?.password}</p>
    </div>
  );
}
