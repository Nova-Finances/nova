import { type NextRequest, NextResponse } from "next/server";
import { addToWaitlist, readWaitlist } from "@/lib/waitlistStore";

function isValidEmail(email: string): boolean {
  // Simple RFC5322-inspired validation; good enough for basic checks
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  try {
    const entries = await readWaitlist();
    return NextResponse.json({ entries });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read waitlist" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const emailRaw = typeof body.email === "string" ? body.email : "";
    if (!isValidEmail(emailRaw)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    const result = await addToWaitlist(emailRaw);
    return NextResponse.json({
      success: true,
      added: result.added,
      entry: result.entry,
      message: result.added ? "Added to waitlist" : "Already on the waitlist",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add to waitlist" },
      { status: 500 },
    );
  }
}
