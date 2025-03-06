"use server"
import { z } from "zod"
import { Resend } from 'resend'

// Create a schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
})

// Initialize Resend (you would need to add RESEND_API_KEY to your environment variables)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate form data
    const result = contactFormSchema.safeParse({ name, email, message })

    if (!result.success) {
      return {
        success: false,
        error: "Please check your inputs and try again.",
      }
    }

    // In a real application, you would send the email here
    // For demo purposes, we'll just log the data
    console.log("Contact form submission:", {
      name,
      email,
      message,
    })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log(`Sending to ` + process.env.RESEND_EMAIL);

    // Example of how you would send the email with Resend
  
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <info@bueller.agency>',
      to: process.env.RESEND_EMAIL ?? "info@bueller.agency",
      subject: `New contact form submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    })

    if (error) {
      console.error('Error sending email:', error)
      return {
        success: false,
        error: "Failed to send email. Please try again later."
      }
    }
    

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}

