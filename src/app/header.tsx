'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  const isDark = theme === 'dark'

  return (
    <motion.button
      className={`
        inline-flex h-12 w-12 items-center justify-center rounded-xl
        transition-colors duration-200
        focus-visible:outline-2
        bg-orange-200 text-yellow-900
        hover:bg-orange-300 hover:text-yellow-800
        active:scale-95
        dark:bg-purple-900 dark:text-purple-200
        dark:hover:bg-purple-700 dark:hover:text-purple-100
      `}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      whileTap={{ rotate: 20, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          // Show MoonIcon when dark
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex"
          >
            <MoonIcon className="h-6 w-6" />
          </motion.span>
        ) : (
          // Show SunIcon when light
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex"
          >
            <SunIcon className="h-6 w-6" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
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
      
      <nav className="relative flex items-center gap-12">
        {navLinks.map(link => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-lg font-medium"
              style={{ zIndex: 1 }}
            >
              <span className={isActive
                ? "text-zinc-900 dark:text-white font-semibold"
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }>
                {link.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-orange-400 dark:bg-purple-600"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </nav>

      <div>
        <ThemeSwitch />
      </div>
    </header>
  )
}