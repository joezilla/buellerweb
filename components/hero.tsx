"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pexels-fauxels-3184300.jpg"
          alt="Team collaboration"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Strategic talent. <br />
              <span className="text-white">Lasting impact.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-200 text-xl mb-8 max-w-2xl mx-auto"
          >
            Let us help make a lasting impact in your business. Your next growth phase starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-white hover:bg-gray-100 text-black px-8 rounded-none" asChild>
              <Link href="/contact">
                <FileText className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

