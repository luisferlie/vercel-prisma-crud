import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET() {
    try {
        const tasks = await prisma.task.findMany()
        console.log(tasks);
        return NextResponse.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return NextResponse.json({ error: 'Error fetching tasks' }, { status: 500 });
    }
}
  
export async function POST(request) {
    try {
        const {title, description} = await request.json();
        console.log(title, description)
        const newTask = await prisma.task.create({
            data: {
                title,
                description
            }
        })
        console.log(newTask)
        return NextResponse.json(newTask);
    } catch (error) {
        console.error('Error creating task:', error);
        return NextResponse.json({ error: 'Error creating task' }, { status: 500 });
    }
}