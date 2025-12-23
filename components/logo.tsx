import { Book } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 self-center">
      <HugeiconsIcon icon={Book} className="size-8" />
      <span className="text-2xl font-bold">Trainmint</span>
    </Link>
  );
}
