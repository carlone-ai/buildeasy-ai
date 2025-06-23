"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const logos = [
  {
    name: "Next.js",
    src: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
  },
  {
    name: "Node.js",
    src: "https://nodejs.org/static/images/logo.svg",
  },
  {
    name: "Python",
    src: "https://www.python.org/static/community_logos/python-logo-generic.svg",
  },
  {
    name: "React",
    src: "https://reactjs.org/favicon.ico",
  },
  // {
  //   name: "Microsoft Azure",
  //   src: "https://azure.microsoft.com/favicon.ico",
  // },
  // {
  //   name: "AWS",
  //   src: "https://aws.amazon.com/favicon.ico",
  // },
  // {
  //   name: "Google Cloud",
  //   src: "https://www.gstatic.com/devrel-devsite/prod/v2210075187f059b839246c2c03840474501c3c6024a99fb78f6293c1b4c0f664/cloud/images/cloud-logo.svg",
  // },
  {
    name: "LangChain",
    src: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
  },
  {
    name: "OpenAI",
    src: "https://openai.com/favicon.ico",
  },
  // {
  //   name: "Anthropic",
  //   src: "https://www.anthropic.com/images/favicon.ico",
  // },
  {
    name: "Pinecone",
    src: "https://www.pinecone.io/favicon.ico",
  },
  {
    name: "FastAPI",
    src: "https://fastapi.tiangolo.com/img/favicon.png",
  },
]

export function LogoTicker() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current) return
    const scrollerContent = Array.from(scrollerRef.current.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      scrollerRef.current?.appendChild(duplicatedItem)
    })
  }, [])

  return (
    <div className="w-full overflow-hidden py-12 bg-background border-y border-border/40">
      <div className="container mx-auto">
        <h2 className="text-center text-base font-medium tracking-wider text-muted-foreground mb-16">
          TECH WE WORK WITH
        </h2>
        <div className="relative w-4/5 mx-auto">
          <div className="flex w-max animate-scroll">
            <div ref={scrollerRef} className="flex items-center space-x-24">
              {logos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center px-4">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    width={120}
                    height={40}
                    className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
