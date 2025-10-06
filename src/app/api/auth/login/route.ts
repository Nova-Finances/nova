import { NextResponse } from "next/server";

function isAllowed(user: string, pass: string) {
  return (
    user === (process.env.ADMIN_USER || "") &&
    pass === (process.env.ADMIN_PASS || "")
  );
}

export async function POST(req: Request) {
  const { username, password } = (await req.json().catch(() => ({}))) as {
    username?: string;
    password?: string;
  };
  if (!username || !password || !isAllowed(username, password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
  const res = NextResponse.json({ success: true });
  // 12h cookie
  res.cookies.set("waitlist_admin", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 12,
    path: "/",
  });
  return res;
}
