import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();
  // console.log("hello:", user);

  const data = await req.json();
  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const fullName = `${user.firstName} ${user.lastName}`;
  const post = await db.post.create({
    data: {
      title: data.title,
      subtitle: data.subtitle,
      body: data.description,
      author: fullName,
      authorEmail: user.emailAddresses[0].emailAddress,
    }
  });
  return NextResponse.json({ status: 200 });
}
export async function GET() {
  const posts = await db.post.findMany({});
  return NextResponse.json({ posts, status: 200 });
}
