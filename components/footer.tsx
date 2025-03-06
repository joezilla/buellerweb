"use client"

import { Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/bueller-logo-wh.png"
                alt="bueller logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Strategic talent.
              <br />
              Lasting impact.
            </p>
          </div>

          {/* Quick Links */}


          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pages/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/pages/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/pages/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* misc links */}
          <div className="col-span-1">
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-white hover:bg-gray-100 text-black rounded-none flex items-center space-x-2 mb-4"
                asChild
              >
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </motion.div>
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.linkedin.com/company/bueller-agency" className="text-gray-400 hover:text-white transition-colors">
                <Image src="/linkedin-wide.png"  width="150"  height="144" alt="linkedin logo"  />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} bueller agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


