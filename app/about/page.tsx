import { Check, Rocket, Zap, Search, Shield, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">About Build Easy AI</h1>
        <p className="text-lg text-muted-foreground">
          We empower businesses to seamlessly integrate AI into their workflows, driving innovation, automation, and
          productivity. Our expertise lies in transforming manual, time-consuming processes into intelligent, AI-powered
          solutions that enhance efficiency and decision-making.
        </p>
      </div>

      {/* Who We Are Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-muted-foreground">
          We are a team of AI specialists, engineers, and consultants dedicated to helping companies leverage the power
          of AI. Whether you're looking to automate content generation, optimize customer interactions, or streamline
          internal operations, we provide tailored AI solutions that align with your business goals.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        <div className="space-y-4">
          {[
            {
              title: "AI Strategy & Implementation",
              description: "Identifying AI opportunities in your business and building custom solutions.",
            },
            {
              title: "Automated Workflows",
              description: "Enhancing productivity with AI-driven automation tools.",
            },
            {
              title: "AI-Powered Content & Insights",
              description:
                "Utilizing AI for data-driven decision-making, document generation, and customer engagement.",
            },
            {
              title: "Custom AI Development",
              description: "Creating domain-specific AI models that integrate seamlessly into your existing systems.",
            },
            {
              title: "Enterprise AI Training",
              description: "Educating teams on best practices for AI adoption and responsible AI usage.",
            },
          ].map((service, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Choose Build Easy AI?</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: Rocket,
              title: "Expert Guidance",
              description: "We bring deep expertise in AI, ensuring practical and scalable solutions.",
            },
            {
              icon: Zap,
              title: "Tailored Solutions",
              description: "Every business is unique, and so are our AI-driven implementations.",
            },
            {
              icon: Search,
              title: "Efficiency & Automation",
              description:
                "We focus on measurable impact, reducing operational overhead and enhancing workflow productivity.",
            },
            {
              icon: Shield,
              title: "Responsible AI",
              description: "We prioritize ethical AI practices and compliance to ensure trust and transparency.",
            },
          ].map((feature, index) => (
            <div key={index} className="border rounded-lg p-6">
              <feature.icon className="h-8 w-8 text-[#FE6E00] mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to future-proof your business for AGI?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Partner with Build Easy AI to build the AI foundation your business needs to thrive in the age of artificial
          general intelligence.
        </p>
        <Button size="lg" className="gap-2" asChild>
          <a href="https://calendly.com/carlone-o94/30min" target="_blank" rel="noopener noreferrer">
            <Mail className="h-4 w-4" />
            Book Consultation
          </a>
        </Button>
      </section>
    </div>
  )
}
