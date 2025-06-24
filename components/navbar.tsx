import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="./images/logo.png"
            alt="Build Easy AI Logo"
            width={140}
            height={40}
            className="h-20 w-auto scale-[1.8]" // "h-20 w-auto"
          />
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://calendly.com/carlone-o94/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              Book Consultation
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
