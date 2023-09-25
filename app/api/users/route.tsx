import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "Abim" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ err: "Name is compulosry" }, { status: 400 });
  }
  const randomID = Math.floor(Math.random() * 10);

  return NextResponse.json({ id: randomID, name: body.name });
}
