"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ContactForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { firstName: "", lastName: "", email: "" }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      valid = false
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Something went wrong")
      }

      alert("Success! We'll be in touch within the hour.")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
      router.refresh()
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const inputStyle =
    "w-full border-0 border-b border-gray-400 rounded-none bg-transparent focus:outline-none focus:ring-0 px-0 py-2 text-black"
  const labelStyle = "block text-gray-800 mb-2"

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelStyle}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={inputStyle}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div className="space-y-2">
          <label className={labelStyle}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={inputStyle}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelStyle}>
          Email <span className="text-red-500">*</span>
        </label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputStyle} />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelStyle}>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className={inputStyle}
          />
        </div>

        <div className="space-y-2">
          <label className={labelStyle}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 999-999-9999"
            className={`${inputStyle} placeholder:text-gray-400`}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelStyle}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleTextareaChange}
          className="w-full min-h-[100px] resize-none border-0 border-b border-gray-400 rounded-none bg-transparent focus:outline-none focus:ring-0 px-0 py-2 text-black"
        />
      </div>

      <button
        type="submit"
        className="w-full h-14 text-lg bg-black hover:bg-black/90 text-white rounded-full disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Hear From Us in Less than 24 hours"}
      </button>
    </form>
  )
}
