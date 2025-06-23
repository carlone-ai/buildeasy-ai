import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
