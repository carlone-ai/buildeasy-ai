import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to future-proof your business for AGI?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Partner with Build Easy AI to build the AI foundation your business needs to thrive in the age of artificial general intelligence.
        </p>
        <Button size="lg" asChild>
          <a href="https://calendly.com/carlone-o94/30min" target="_blank" rel="noopener noreferrer">
            Book Consultation
          </a>
        </Button>
      </div>
    </section>
  )
}
