import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const post = await db.post.create({
    data: {
      title: data.title,
      subtitle: data.subtitle,
      desc: data.description,
    },
  });
  console.log("post created");

  return NextResponse.json({ post, status: 200 });
}
export async function GET() {
  const posts = await db.post.findMany({});
  return NextResponse.json({ posts, status: 200 });
}
