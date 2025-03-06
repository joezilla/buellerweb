"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const isContactPage = pathname === "/contact"

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b ${
        isContactPage ? "border-gray-200" : "border-white/10"
      }`}
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/bueller-logo-wh.png"
          alt="bueller logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/contact">Contact Us</NavLink>
      </div>

    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
    </Link>
  )
}

