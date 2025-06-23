"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Zap, HelpCircle, Database, Cpu, Users } from "lucide-react"

const faqData = [
  {
    question: "Unclear Strategy: How Does Gen AI Fit Into Our Roadmap?",
    answer:
      'With so many possibilities, it\'s tough to determine where Gen AI creates the most impact. Many teams feel the pressure to "do something" with AI, but without a clear use case, they end up building flashy features that fail to drive real ROI.',
    icon: HelpCircle,
  },
  {
    question: "Data Uncertainty: What Data Do We Need for Success?",
    answer:
      "AI thrives on high-quality data, but what should you be collecting now? Many companies realize too late that they're missing critical data to power their AI features. Without the right foundation, scaling AI becomes a costly challenge.",
    icon: Database,
  },
  {
    question: "From Demo to Reality: Accuracy, Costs & Performance Issues?",
    answer:
      "Demos are easy. Production-ready AI is hard. Many teams struggle with:\n\n• Hallucinations that make AI outputs unreliable\n• High latency that frustrates users\n• Escalating costs that make AI products unsustainable",
    icon: Cpu,
  },
  {
    question: "Top AI Talent Is Hard to Find & Expensive",
    answer:
      "Building an in-house AI team with the right ML, engineering, and product expertise is costly and competitive. Without the right talent, startups risk delays, inefficiencies, and failed implementations.",
    icon: Users,
  },
]

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section className="border-t border-border/40">
      <div className="container mx-auto py-24">
        <div className="flex items-start">
          <div className="w-1/4 flex justify-center pt-8">
            <Zap className="h-16 w-16 text-[#FE6E00]" />
          </div>
          <div className="w-3/4">
            <div className="space-y-4 mb-16">
              <h2 className="text-3xl font-bold">The Challenges Adopting AI</h2>
              {/* <h3 className="text-xl text-muted-foreground">
                Why Businesses Struggle to Build High-ROI Generative AI Products?
              </h3> */}
              <p className="text-muted-foreground max-w-2xl">
                Many businesses recognize the potential of Generative AI, but turning that potential into real business
                value is easier said than done. Here's why companies struggle to build AI products and features that
                deliver a high return on investment (ROI):
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" onValueChange={(value) => setOpenItem(value)}>
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/40 py-2">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <item.icon
                        className={`h-6 w-6 transition-all duration-300 ${
                          openItem === `item-${index}` ? "text-[#FE6E00] rotate-12" : "text-muted-foreground"
                        }`}
                      />
                      <span className="text-lg font-medium">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="whitespace-pre-line">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
