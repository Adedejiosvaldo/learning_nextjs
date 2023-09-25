import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export const GET = (request: NextRequest, { params: { id } }: Props) => {
  if (id > 10) {
    return NextResponse.json({ error: "User not doundd" }, { status: 404 });
  }
  return NextResponse.json({ id });
};
