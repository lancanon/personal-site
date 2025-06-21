'use client'
import { SOCIAL_LINKS } from './data'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'

const ICONS = {
  Github: <FaGithub size={25} />,
  Twitter: <FaTwitter size={25} />,
  LinkedIn: <FaLinkedin size={25} />,
  Instagram: <FaInstagram size={25} />,
} as const;

export function Footer() {
  return (
    <footer className="mt-24 ">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-4 justify-center">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-zinc-500 hover:text-[#2563eb] transition-colors"
            >
              {ICONS[link.label as keyof typeof ICONS] ?? link.label}
            </a>
          ))}
        </div>
        <span>© 2025 Audy Vee. All Rights Reserved.</span>
      </div>
    </footer>
  )
}