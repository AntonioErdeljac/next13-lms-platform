import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const { title } = await req.json();
    const email = session?.user?.email;

    if (!session || !isTeacher(email)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const userId = session.user.userId;
    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
