import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | bueller.",
  description: "Get in touch with our team to discuss your project and how we can help.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Dark header section */}
      <div className="bg-black">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">Contact us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Send a line about your project</h2>
                <ContactForm />
              </div>

              <div className="mt-8 md:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Office Location</h3>
                    <p className="text-black">
                      12273 Dream Avenue,
                      <br />
                      London, 123456
                      <br />
                      United Kingdom
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Office Time</h3>
                    <p className="text-black">
                      Monday - Sunday
                      <br />
                      11am - 7pm
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Support</h3>
                    <p className="text-black">
                      hello@bueller.com
                      <br />
                      123 456 8888
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

