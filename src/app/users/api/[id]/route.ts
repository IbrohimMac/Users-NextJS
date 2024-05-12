import { NextRequest, NextResponse } from "next/server";
import { users } from "../data";

export function GET(
  request: Request,
  context: {
    params: {
      id: string;
    };
  }
) {
  const id = +context.params.id;
  if (id > users.length) {
    return NextResponse.json(
      { message: "Comment not found" },
      {
        status: 404,
      }
    );
  }
  const comment = users.find((cm) => cm.id === id);
  return Response.json(comment);
}

export function DELETE(
  request: Request,
  context: {
    params: {
      id: string;
    };
  }
) {
  const id = +context.params.id;
  const index = users.findIndex((cm) => cm.id === id);
  users.splice(index, 1);
  return NextResponse.json(users);
}

export async function PUT(
  request: Request,
  context: {
    params: {
      id: string;
    };
  }
) {
  const id = +context.params.id;
  const comment = await request.json();
  const newUsers = users.map((c) => (c.id === id ? comment : c));
  return NextResponse.json(newUsers);
}
