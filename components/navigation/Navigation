import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Navigation({ onStory }: { onStory: () => void }) {
  return (
    <header className="site-nav">
      <Link href="/" aria-label="EIMAS home">
        <Logo />
      </Link>
      <nav aria-label="Primary navigation">
        <button type="button" onClick={onStory}>
          Story
        </button>
        <Link href="/explore">Explore</Link>
        <Link href="/magi">MAGI</Link>
      </nav>
      <Button href="/explore">Explore EIMAS</Button>
    </header>
  );
}
