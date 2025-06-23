import { Workflow, Telescope, Blocks } from "lucide-react"

const features = [
  {
    name: "Exploratory Call",
    description:
      "In a 30-minute call, we'll explore your needs, identify potential ROI opportunities, and assess if we're a good fit to work together.",
    icon: Workflow,
  },
  {
    name: "Project Scoping",
    description:
      "We'll walk you through an alignment workshop, assess your use case and data, and craft a tailored execution plan.",
    icon: Telescope,
  },
  {
    name: "Development Phase",
    description: "State-of-the-art security measures to protect your most valuable assets.",
    icon: Workflow,
  },
  {
    name: "Refine Stage",
    description:
      "We'll support you post-launch with enhancements, fixes, and accuracy improvements as your solution gains traction.",
    icon: Blocks,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">How we work</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8 text-[#FE6E00]" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
