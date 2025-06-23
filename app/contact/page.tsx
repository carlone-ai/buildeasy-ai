"use client"

import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    // Redirect to Calendly immediately when the page loads
    window.location.href = "https://calendly.com/carlone-o94/30min"
  }, [])

  return (
    <div className="container max-w-4xl py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Redirecting to Schedule a Meeting...</h1>
        <p className="text-lg text-muted-foreground mb-8">
          You'll be redirected to our Calendly page to book a consultation.
        </p>
        <p className="text-sm text-muted-foreground">
          If you're not redirected automatically,{" "}
          <a
            href="https://calendly.com/carlone-o94/30min"
            className="text-[#FE6E00] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  )
}
