"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* About Us Label */}
          <div className="flex items-center space-x-2 mb-12">
            <div className="w-1 h-1 bg-black rounded-full" />
            <span className="text-sm font-medium">About Us</span>
          </div>

          {/* Main Text */}
          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-16">
            We are a holistic talent agency that builds high-performing teams. What sets us apart is our inside-out
            approach—we start by optimizing your existing leadership team, ensuring they work seamlessly together. With
            that strong foundation, we identify and place executive talent that aligns with your needs, values, and
            culture.
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <motion.div
              className="bg-gray-50 p-8 group hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm text-gray-400 mb-4 block">01</span>
              <h3 className="text-xl font-medium">Team Assessment</h3>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 group hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm text-gray-400 mb-4 block">02</span>
              <h3 className="text-xl font-medium">Executive Staffing</h3>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 group hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm text-gray-400 mb-4 block">03</span>
              <h3 className="text-xl font-medium">Fractional Leadership</h3>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 group hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm text-gray-400 mb-4 block">04</span>
              <h3 className="text-xl font-medium">Operational Consulting</h3>
            </motion.div>
          </div>

          {/* Contact Link */}
          <Link
            href="/contact"
            className="inline-flex items-center text-black hover:text-gray-600 transition-colors group"
          >
            Contact us
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

