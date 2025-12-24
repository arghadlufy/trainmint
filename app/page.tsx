"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  console.log(session);

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          toast.success("Logged out successfully");
        },
        onError: (error) => {
          toast.error(error.error.message);
        },
      },
    });
  }

  return (
    <div>
      <h1 className="text-2xl">
        Hello world
        <ThemeToggle />
        {session ? (
          <div>
            <p>{session.user?.name}</p>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <Button>Login</Button>
        )}
      </h1>
    </div>
  );
}
