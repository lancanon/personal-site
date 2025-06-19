'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  const isDark = theme === 'dark'
  return (
    <button
      className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 dark:text-zinc-400"
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  )
}

const navLinks = [
  { href: '/', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  return (
    <header className="mb-8 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/android-chrome-512x512.png"
            alt="Audy Vee Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
        </Link>
      </div>
      {/* Center: Nav with sliding highlight */}
      <nav className="relative flex items-center gap-12">
        {navLinks.map(link => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 rounded-xl text-lg font-medium"
              style={{ zIndex: 1 }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-highlight"
                  className="absolute inset-0 rounded-xl bg-zinc-100 dark:bg-[#1e2936]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
              <span className={isActive
                ? "text-zinc-900 dark:text-white font-semibold"
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }>
                {link.label}
              </span>
            </Link>
          )
        })}
      </nav>
      {/* Right: Theme Switch */}
      <div>
        <ThemeSwitch />
      </div>
    </header>
  )
}