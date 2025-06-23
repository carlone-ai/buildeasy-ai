// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { XCircle, UserX, Users, Handshake } from "lucide-react"

// const options = [
//   {
//     title: "Ignore the Opportunity",
//     description:
//       "It's easy to push this decision down the road—but let's be real: your competitors aren't waiting. Your investors and board understand that well-executed Gen AI is a game-changer. And so do you.",
//     icon: XCircle,
//   },
//   {
//     title: "Hire Freelancers",
//     description:
//       "You could browse Upwork for cheap talent, but can you trust them to deliver reliable solutions? Will they be there post-launch? Do they grasp the urgency and complexity of your product? AI isn't just another feature—it's a competitive edge.",
//     icon: UserX,
//   },
//   {
//     title: "Build an In-House Team",
//     description:
//       "Long-term, this is the right move for many startups. But in the short to medium term, hiring and retaining top AI talent is expensive, risky, and highly competitive. Bring us in, and we'll fast-track your AI development—plus, when the time is right, you can transition our experts into full-time hires.",
//     icon: Users,
//   },
//   {
//     title: "Partner with Us",
//     description:
//       "Skip the hiring headaches and get instant access to elite Gen AI expertise. Our team integrates seamlessly, works with the latest startup tech stacks, and delivers results fast. Let us take your AI products from idea to execution—so you can stay focused on growth.",
//     icon: Handshake,
//   },
// ]

// export default function OptionsSection() {
//   return (
//     <section className="border-t border-border/40">
//       <div className="container mx-auto py-24">
//         <div className="w-3/4">
//           <div className="space-y-4 text-center mb-16">
//             <h2 className="text-3xl font-bold">Your Options</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Choose the path that best aligns with your AI development strategy
//             </p>
//           </div>

//           <Accordion type="single" collapsible className="w-full">
//             {options.map((option, index) => (
//               <AccordionItem
//                 key={index}
//                 value={`item-${index}`}
//                 className={`border-b border-border/40 py-2 ${
//                   index === 3 ? "bg-gradient-to-r from-brandOrange/10 to-transparent" : ""
//                 }`}
//               >
//                 <AccordionTrigger className="text-left hover:no-underline">
//                   <div className="flex items-center gap-4">
//                     <option.icon className={`h-6 w-6 ${index === 3 ? "text-[#FE6E00]" : "text-[#FE6E00]"}`} />
//                     <span className={`text-lg font-medium ${index === 3 ? "text-[#FE6E00]" : ""}`}>{option.title}</span>
//                   </div>
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground">
//                   <p className="whitespace-pre-line text-base leading-relaxed pl-10">{option.description}</p>
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { XCircle, UserX, Users, Handshake } from "lucide-react"

const options = [
  {
    title: "Ignore the Opportunity",
    description:
      "It's easy to push this decision down the road—but let's be real: your competitors aren't waiting. Your investors and board understand that well-executed Gen AI is a game-changer. And so do you.",
    icon: XCircle,
  },
  {
    title: "Hire Freelancers",
    description:
      "You could browse Upwork for cheap talent, but can you trust them to deliver reliable solutions? Will they be there post-launch? Do they grasp the urgency and complexity of your product? AI isn't just another feature—it's a competitive edge.",
    icon: UserX,
  },
  {
    title: "Build an In-House Team",
    description:
      "Long-term, this is the right move for many startups. But in the short to medium term, hiring and retaining top AI talent is expensive, risky, and highly competitive. Bring us in, and we'll fast-track your AI development—plus, when the time is right, you can transition our experts into full-time hires.",
    icon: Users,
  },
  {
    title: "Partner with Us",
    description:
      "Skip the hiring headaches and get instant access to elite Gen AI expertise. Our team integrates seamlessly, works with the latest startup tech stacks, and delivers results fast. Let us take your AI products from idea to execution—so you can stay focused on growth.",
    icon: Handshake,
  },
]

export default function OptionsSection() {
  return (
    <section className="border-t border-border/40">
      <div className="container mx-auto py-24">
        <div className="w-3/4">
          <div className="space-y-4 text-left mb-16"> {/* CHANGED FROM text-center TO text-left */}
            <h2 className="text-3xl font-bold">Your Options</h2>
            <p className="text-muted-foreground max-w-2xl"> {/* REMOVED mx-auto */}
              Choose the path that best aligns with your AI development strategy
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {options.map((option, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border-b border-border/40 py-2 ${
                  index === 3 ? "bg-gradient-to-r from-brandOrange/10 to-transparent" : ""
                }`}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <option.icon className={`h-6 w-6 ${index === 3 ? "text-[#FE6E00]" : "text-[#FE6E00]"}`} />
                    <span className={`text-lg font-medium ${index === 3 ? "text-[#FE6E00]" : ""}`}>{option.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="whitespace-pre-line text-base leading-relaxed pl-10">{option.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
