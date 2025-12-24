"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { useTransition } from "react";
import { toast } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import { GoogleIcon, GithubIcon } from "@hugeicons/core-free-icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [githubPending, startGithibTransition] = useTransition();
  const [googlePending, startGoogleTransition] = useTransition();

  async function signInWithGoogle() {
    startGoogleTransition(async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged in successfully");
          },
          onError: (error) => {
            toast.error(error.error.message);
          },
        },
      });
    });
  }

  async function signInWithGithub() {
    startGithibTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged in successfully");
          },
          onError: (error) => {
            toast.error(error.error.message);
          },
        },
      });
    });
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome back!</CardTitle>
        <CardDescription>Login to your account to continue</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <Button
          className="w-full bg-primary"
          onClick={signInWithGoogle}
          disabled={googlePending}
        >
          <HugeiconsIcon icon={GoogleIcon} className="size-4" />
          {googlePending ? "Signing in..." : "Sign in with Google"}
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={signInWithGithub}
          disabled={githubPending}
        >
          <HugeiconsIcon icon={GithubIcon} className="size-4" />
          {githubPending ? "Signing in..." : "Sign in with Github"}
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative bg-card z-10 px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="email@example.com"
              className="bg-background"
            />
          </div>

          <Button className="w-full">Continue with Email</Button>
        </div>
      </CardContent>
    </Card>
  );
}
