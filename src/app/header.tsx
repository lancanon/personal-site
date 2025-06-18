'use client'
import { TextEffect } from '../../components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Audy Vee
        </Link>
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
          className="[color:#e28A4c]  hover:[color:#2563eb] transition-colors]"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS Cloud Practitioner
        </Link>
      </div>
    </header>
  )
}
