import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;

    const todo = await prisma.todo.findUnique({
      where: {
        id: +id,
      },
    });

    if (!todo) throw "Error Not Found";

    return NextResponse.json(todo, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error" });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const { id } = params;
    const body = await req.json();

    const updateTodo = await prisma.todo.update({
      where: {
        id: +id,
      },
      data: {
        title: body.title.toString(),
        description: body.description,
        status: Boolean(body.status),
        userId: body.userId,
      },
    });
    return NextResponse.json({ message: "Todo updated" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error" });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;

    await prisma.todo.delete({
      where: {
        id: +id,
      },
    });

    return NextResponse.json({ message: "Todo deleted" });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
