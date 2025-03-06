import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Dark header section */}
      <div className="bg-black">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="flex-grow bg-white flex items-center justify-center">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* 404 Display */}
            <h1 className="text-9xl font-bold text-black mb-6">404</h1>

            {/* Error message */}
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Page not found</h2>

            {/* Explanation */}
            <p className="text-xl text-gray-600 mb-12">The page you're looking for doesn't exist or has been moved.</p>

            {/* Navigation options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-black hover:bg-gray-800 text-white rounded-none px-8 py-6" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>

              <Button
                variant="outline"
                className="border-black text-black hover:bg-gray-100 rounded-none px-8 py-6"
                asChild
              >
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
