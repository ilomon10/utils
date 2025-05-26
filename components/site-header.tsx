import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {/* <ThemeToggle /> */}
            <Button variant="ghost" size="sm" asChild>
              <Link href="#">Sign In</Link>
            </Button>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
