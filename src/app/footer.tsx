'use client'
import { SOCIAL_LINKS } from '@/data/site'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const ICONS = {
  Github: <FaGithub size={22} />,
  Twitter: <FaTwitter size={22} />,
  LinkedIn: <FaLinkedin size={22} />,
  Instagram: <FaInstagram size={22} />,
} as const;

export function Footer() {
  return (
    <footer className="mt-12 py-2 w-full">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-4 justify-center">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-zinc-600 dark:text-zinc-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
            >
              {ICONS[link.label as keyof typeof ICONS] ?? link.label}
            </a>
          ))}
        </div>
        <span className="text-sm">© 2026 Audy Vee. All Rights Reserved.</span>
      </div>
    </footer>
  )
}