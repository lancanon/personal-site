'use client'
import { TextEffect } from '../../components/ui/text-effect'
import Link from 'next/link'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// Theme switcher button
function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

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

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="font-medium text-black dark:text-white">
          Audy Vee
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:underline">
            Contact
          </Link>
          <ThemeSwitch />
        </nav>
      </div>
      <div>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
        <Link
          href="https://www.credly.com/badges/3b3cfd88-bbb4-40ca-8297-fb14c022e817/linked_in_profile"
          className="[color:#e28A4c] hover:[color:#2563eb] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS Cloud Practitioner
        </Link>
      </div>
    </header>
  )
}