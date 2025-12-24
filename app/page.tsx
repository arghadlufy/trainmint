import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">
        Hello world
        <ThemeToggle />
      </h1>
    </div>
  );
}
