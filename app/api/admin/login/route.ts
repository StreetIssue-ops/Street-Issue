import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (
    username === "streetissue" &&
    password === "StreetIssue2026"
  ) {
    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin-auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  }

  return NextResponse.json(
    {
      success: false,
      message: "Invalid username or password",
    },
    {
      status: 401,
    }
  );
}