import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">
        Hello world
        <ModeToggle />
      </h1>
    </div>
  );
}
