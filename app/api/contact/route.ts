import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, company, phone, message } = body

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email
    // 3. Integrate with CRM
    // For now, we'll just simulate a successful response

    console.log("Contact form submission:", { firstName, lastName, email, company, phone, message })

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
