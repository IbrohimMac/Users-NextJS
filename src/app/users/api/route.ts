import { users } from "./data";
import { NextRequest } from "next/server";

export function GET() {
  return Response.json(users);
}

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  const newUsers = { text, id: users.length + 1 };
  users.push(newUsers);
  return Response.json(newUsers, { status: 201 });
}
