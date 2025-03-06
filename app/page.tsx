import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Bueller Agency - Modern talent in the age of AI',
  description: 'We are a holistic talent agency that builds high-performing teams.',
}

// Force static page generation
// export const dynamic = 'force-static'

import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"


export default function Page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
     

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <Footer />
      </div>
    </main>
  )
}


