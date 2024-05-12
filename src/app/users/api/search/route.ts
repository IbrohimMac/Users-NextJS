import { NextRequest, NextResponse } from "next/server";
import { users } from "../data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredUsers = query
    ? users.filter((cm) => cm.text.toLowerCase().includes(query.toLowerCase()))
    : users;

  return NextResponse.json(filteredUsers);
}
