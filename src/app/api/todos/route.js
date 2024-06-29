import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export const GET = async (req, {params}) => {
    try {

        const todos = await prisma.todo.findMany({
            include: {
                user: true
            }
        })
        return NextResponse.json({data: todos}, {status: 200})
    } catch(err) {
        console.log(err)
        return NextResponse.json({message: "Error"})
    }
}

export const POST = async (req, {params}) => {
    try {
        const body = await req.json();
        
        // {title: "", description: "", userId: 1}

        await prisma.todo.create({
            data: body
        })
        return NextResponse.json({message: "Todo created"}, {status: 201})
    } catch(err) {
        console.log(err)
        return NextResponse.json({message: "Error"})
    }
}