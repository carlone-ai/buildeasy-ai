import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import { XLogo } from "./icons/x-logo"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <Image
            src="/images/logo.png"
            alt="Build Easy AI Logo"
            width={400}
            height={160}
            className="h-40 w-auto mb-2"
          />
          <h2 className="font-bold">Build Easy AI</h2>
          <p className="text-sm text-muted-foreground">Empowering SMBs with intelligent AI Agent solutions.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://calendly.com/carlone-o94/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              {/* <Link
                href="https://twitter.com/buildeasy_ai"
                className="text-[#FE6E00] transition-colors hover:text-primary"
              >
                <XLogo className="h-5 w-5 fill-current" />
                <span className="sr-only">X (formerly Twitter)</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/build-easy-ai-inc"
                className="text-[#FE6E00] transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link> */}
              <Link
                href="https://twitter.com/buildeasy_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FE6E00] transition-colors hover:text-primary"
              >
                <XLogo className="h-5 w-5 fill-current" />
                <span className="sr-only">X (formerly Twitter)</span>
              </Link>

              <Link
                href="https://www.linkedin.com/company/build-easy-ai-inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FE6E00] transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Build Easy AI Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
