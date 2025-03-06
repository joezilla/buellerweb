"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { sendContactEmail } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success" | "error"
    message: string
  }>({
    status: "idle",
    message: "",
  })

  async function handleSubmit(formData: FormData) {
    setFormState({ status: "submitting", message: "" })

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setFormState({
          status: "success", 
          message: "Your message has been sent successfully. We'll get back to you soon!",
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setFormState({
          status: "error",
          message: result.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setFormState({
        status: "error",
        message: "An unexpected error occurred. Please try again later.",
      })
    }
  }

  return (
    <div>
      {formState.status === "success" ? (
        <div className="bg-black text-white p-6 mb-6 flex items-start">
          <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium mb-2">Message sent!</h3>
            <p>{formState.message}</p>
            <Button
              className="mt-4 bg-white text-black hover:bg-gray-100 rounded-none"
              onClick={() => setFormState({ status: "idle", message: "" })}
            >
              Send another message
            </Button>
          </div>
        </div>
      ) : (
        <form id="contact-form" action={handleSubmit} className="space-y-6">
          {formState.status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 mb-4 flex items-start">
              <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Error</h3>
                <p>{formState.message}</p>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full border-gray-300 rounded-none focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border-gray-300 rounded-none focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              rows={5}
              className="w-full border-gray-300 rounded-none focus:ring-black focus:border-black"
            />
          </div>

          <SubmitButton isSubmitting={formState.status === "submitting"} />
        </form>
      )}
    </div>
  )
}

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  const { pending } = useFormStatus()
  const isDisabled = pending || isSubmitting

  return (
    <Button
      type="submit"
      disabled={isDisabled}
      className="w-full bg-black hover:bg-gray-800 text-white rounded-none flex items-center justify-center"
    >
      {isDisabled ? (
        "Sending..."
      ) : (
        <>
          Send Message
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}

