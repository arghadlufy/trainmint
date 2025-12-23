import Logo from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeftIcon, Book } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href="/"
        className={buttonVariants({
          variant: "ghost",
          className: "absolute top-4 left-4",
        })}
      >
        <HugeiconsIcon icon={ArrowLeftIcon} className="size-4" />
        <span className="text-sm">Back to home</span>
      </Link>

      <div className="flex w-full max-w-sm flex-col gap-6">
        <Logo />
        {children}
        <div className="text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link href="/terms" className="underline text-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
