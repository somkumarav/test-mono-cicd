import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const data = await prismaClient.user.findFirst();

  return (
    <div>
      <p className='text-red-100'>hello world</p>
      <p>{data?.username}</p>
      <p>{data?.password}</p>
    </div>
  );
}
