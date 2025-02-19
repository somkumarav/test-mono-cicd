import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const data = await prismaClient.user.findFirst();

  return (
    <div>
      <p>hello</p>
      <p>{data?.username}</p>
      <p>{data?.password}</p>
    </div>
  );
}
