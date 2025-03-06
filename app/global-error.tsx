"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RefreshCw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-3xl mx-auto text-center">
              {/* Error Display */}
              <h1 className="text-6xl font-bold text-black mb-6">Something went wrong</h1>

              {/* Error message */}
              <p className="text-xl text-gray-600 mb-12">
                We apologize for the inconvenience. Our team has been notified of this issue.
              </p>

              {/* Navigation options */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  className="bg-black hover:bg-gray-800 text-white rounded-none px-8 py-6"
                  onClick={() => reset()}
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Try Again
                </Button>

                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-gray-100 rounded-none px-8 py-6"
                  asChild
                >
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

