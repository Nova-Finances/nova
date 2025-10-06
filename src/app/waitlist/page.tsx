import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { readWaitlist } from "@/lib/waitlistStore";

export const dynamic = "force-dynamic";

async function LoginForm() {
  return (
    <div className="mx-auto w-full max-w-sm space-y-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="space-y-1 text-center">
        <h2 className="text-xl font-semibold text-white">Restricted Area</h2>
        <p className="text-sm text-gray-400">Sign in to view the waitlist</p>
      </div>
      <form
        className="space-y-3"
        action={async (formData) => {
          "use server";
          const username = String(formData.get("username") || "");
          const password = String(formData.get("password") || "");
          const valid =
            username === (process.env.ADMIN_USER || "") &&
            password === (process.env.ADMIN_PASS || "");
          if (!valid) return;
          const jar = await cookies();
          jar.set("waitlist_admin", "1", {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 12,
            path: "/",
          });
          redirect("/waitlist");
        }}
      >
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm text-gray-300">
            Username
          </label>
          <input
            name="username"
            id="username"
            type="text"
            className="h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/60"
            placeholder="Enter username"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm text-gray-300">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/60"
            placeholder="Enter password"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white hover:bg-primary/90"
        >
          Sign In
        </button>
      </form>
      <p className="text-center text-xs text-gray-500">
        Unauthorized access is prohibited.
      </p>
    </div>
  );
}

export default async function WaitlistPage() {
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("waitlist_admin")?.value === "1";
  if (!isAuthed) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center p-6">
        {await LoginForm()}
      </div>
    );
  }

  const entries = await readWaitlist();
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Waitlist</h1>
        <form
          action={async () => {
            "use server";
            const jar = await cookies();
            jar.set("waitlist_admin", "", {
              httpOnly: true,
              sameSite: "lax",
              secure: process.env.NODE_ENV === "production",
              maxAge: 0,
              path: "/",
            });
            redirect("/waitlist");
          }}
        >
          <button
            type="submit"
            className="inline-flex h-9 items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 text-xs text-gray-300 hover:bg-white/10"
          >
            Sign out
          </button>
        </form>
      </div>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="px-4 py-3 text-gray-300">Email</th>
              <th className="px-4 py-3 text-gray-300">Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {entries.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-gray-400" colSpan={2}>
                  No signups yet.
                </td>
              </tr>
            ) : (
              entries.map((e) => (
                <tr
                  key={`${e.email}-${e.subscribedAt}`}
                  className="border-t border-white/10"
                >
                  <td className="px-4 py-3 text-white">{e.email}</td>
                  <td className="px-4 py-3 text-gray-400">
                    {new Date(e.subscribedAt).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
