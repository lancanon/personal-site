'use client'
import { motion } from 'framer-motion'
import { EMAIL, SOCIAL_LINKS } from '../data'

// Example SVGs for each platform
const ICONS = {
  Email: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 6-8.97 6.48a2 2 0 0 1-2.06 0L2 6" />
    </svg>
  ),
  LinkedIn: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/>
    </svg>
  ),
  Instagram: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.03 4.92 4.92 0 0 1 1.03 1.77c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.03 1.77 4.92 4.92 0 0 1-1.77 1.03c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.03 4.92 4.92 0 0 1-1.03-1.77c-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.03-1.77 4.92 4.92 0 0 1 1.77-1.03c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.29.058-2.18.25-2.95.53a7.07 7.07 0 0 0-2.56 1.64A7.07 7.07 0 0 0 .6 4.1c-.28.77-.472 1.66-.53 2.95C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.29.25 2.18.53 2.95a7.07 7.07 0 0 0 1.64 2.56 7.07 7.07 0 0 0 2.56 1.64c.77.28 1.66.472 2.95.53C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.29-.058 2.18-.25 2.95-.53a7.07 7.07 0 0 0 2.56-1.64 7.07 7.07 0 0 0 1.64-2.56c.28-.77.472-1.66.53-2.95.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.29-.25-2.18-.53-2.95a7.07 7.07 0 0 0-1.64-2.56A7.07 7.07 0 0 0 19.9.6c-.77-.28-1.66-.472-2.95-.53C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
    </svg>
  ),
  Discord: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.249.07.07 0 0 0-.073-.035A19.736 19.736 0 0 0 3.677 4.369a.064.064 0 0 0-.03.027C.533 9.09-.32 13.579.099 18.021a.08.08 0 0 0 .031.056c2.052 1.507 4.041 2.422 5.992 3.029a.07.07 0 0 0 .078-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104c-.652-.247-1.27-.549-1.872-.892a.07.07 0 0 1-.007-.117c.126-.094.252-.192.371-.291a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .074.009c.12.099.245.198.372.292a.07.07 0 0 1-.006.117 12.298 12.298 0 0 1-1.873.891.076.076 0 0 0-.04.105c.36.698.772 1.362 1.225 1.993a.07.07 0 0 0 .078.028c1.961-.607 3.95-1.522 6.002-3.029a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/>
    </svg>
  ),
  Bluesky: (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <g>
      <path
        fill="currentColor"
        d="M12 13.5c-2.5-2.5-7.5-2.5-9 0 2.5 2.5 7.5 2.5 9 0z"
      />
      <path
        fill="currentColor"
        d="M12 13.5c2.5-2.5 7.5-2.5 9 0-2.5 2.5-7.5 2.5-9 0z"
      />
      <circle cx="12" cy="13.5" r="1.5" fill="currentColor" />
    </g>
  </svg>
),
}

const CONTACTS = [
  {
    label: 'Email',
    value: EMAIL,
    link: `mailto:${EMAIL}`,
    icon: ICONS.Email,
    display: EMAIL,
  },
  ...SOCIAL_LINKS
    .filter(link => ['LinkedIn', 'Instagram', 'Bluesky'].includes(link.label))
    .map((link) => ({
      label: link.label,
      value: link.link,
      link: link.link,
      icon: ICONS[link.label as keyof typeof ICONS],
      display:
        link.label === 'LinkedIn'
          ? link.link.replace('https://www.linkedin.com/in/', 'in/')
          : link.label === 'Instagram'
          ? '@' + link.link.replace('https://www.instagram.com/', '').replace('/', '')
          : link.label === 'Bluesky'
          ? '@' + link.link.replace('https://bsky.app/profile/', '').replace('.bsky.social', '')
          : undefined,
    })),
]

export default function ContactPage() {
  return (
    <motion.section
      className="max-w-2xl mx-auto py-16"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-2">Contact</h1>
      <p className="text-xl text-zinc-400 mb-8">Let's connect.</p>
      <p className="mb-8 text-zinc-400">
        Connect with me through any of these platforms.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CONTACTS.map((contact) => (
          <a
            key={contact.label}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-zinc-700/40 p-5 hover:border-[#2563eb] transition-colors"
          >
            <span className="text-zinc-300">{contact.icon}</span>
            <div>
              <div className="font-semibold text-white">{contact.label}</div>
              <div className="text-zinc-400 text-sm">
                {contact.display || contact.value}
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  )
}