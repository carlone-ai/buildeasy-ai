// import "./globals.css"
// import { Inter } from "next/font/google"
// import type React from "react"
// import type { Metadata } from "next"
// import MouseMoveEffect from "@/components/mouse-move-effect"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Build Easy AI Inc",
//   description: "Proven expertise to accelerate you to AI speed: grow revenue, reduce costs, transform operations.",
//     generator: ''
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body className={`${inter.className} bg-background text-foreground antialiased`}>
//         <MouseMoveEffect />
//         {children}
//       </body>
//     </html>
//   )
// }

import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Build Easy AI Inc",
  description: "Proven expertise to accelerate you to AI speed: grow revenue, reduce costs, transform operations.",
  generator: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.jpg" />
        {/* Optional extras */}
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}
