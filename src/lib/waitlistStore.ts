import { getRedis } from "./redis";

export type WaitlistEntry = {
  email: string;
  subscribedAt: string; // ISO timestamp
};

const WAITLIST_KEY = "waitlist:emails"; // sorted set: member=email, score=timestamp

export async function readWaitlist(): Promise<WaitlistEntry[]> {
  const redis = getRedis();
  // Get all with scores (timestamps). Different SDK versions can return
  // either [{ member, score }] or [member, score, member, score, ...].
  const raw = (await redis.zrange(WAITLIST_KEY, 0, -1, {
    withScores: true,
  })) as unknown;

  const parseScore = (s: unknown): number =>
    typeof s === "number" ? s : Number.parseFloat(String(s));

  if (Array.isArray(raw)) {
    if (raw.length > 0 && typeof raw[0] === "object" && raw[0] !== null) {
      // Assume array of objects: { member, score }
      const objs = raw as Array<{ member: string; score: number | string }>;
      return objs.map(({ member, score }) => ({
        email: String(member),
        subscribedAt: new Date(parseScore(score)).toISOString(),
      }));
    }
    // Assume flat array alternating member, score
    const out: WaitlistEntry[] = [];
    for (let i = 0; i < raw.length; i += 2) {
      const member = String(raw[i]);
      const score = parseScore(raw[i + 1]);
      out.push({ email: member, subscribedAt: new Date(score).toISOString() });
    }
    return out;
  }

  // Fallback: no entries
  return [];
}

export async function addToWaitlist(
  emailRaw: string,
): Promise<{ added: boolean; entry: WaitlistEntry }> {
  const email = emailRaw.trim().toLowerCase();
  const redis = getRedis();
  const now = Date.now();
  // Use ZADD NX to avoid duplicates
  const added = await redis.zadd(
    WAITLIST_KEY,
    { nx: true },
    { score: now, member: email },
  );
  const entry: WaitlistEntry = {
    email,
    subscribedAt: new Date(now).toISOString(),
  };
  return { added: added === 1, entry };
}
