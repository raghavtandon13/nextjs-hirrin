import { NextResponse, NextRequest } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  return Response.json({ data: data });
}
