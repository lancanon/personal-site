'use client'
import { motion } from 'framer-motion'
import { EMAIL, SOCIAL_LINKS } from '../data'
import { FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

const ICONS = {
  Email: <FaEnvelope size={20} />,
  LinkedIn: <FaLinkedin size={20} />,
  Instagram: <FaInstagram size={20} />,
  Twitter: <FaTwitter size={20} />, 
} as const;

const CONTACTS = [
  {
    label: 'Email',
    value: EMAIL,
    link: `mailto:${EMAIL}`,
    icon: ICONS.Email,
    display: EMAIL,
  },
  ...SOCIAL_LINKS
    .filter(link => ['LinkedIn', 'Instagram', 'Twitter'].includes(link.label))
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
          : link.label === 'Twitter'
          ? '@' + link.link.replace('https://x.com/', '').replace('/', '')
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
      <h3 className="text-lg font-bold mb-6">Let's Connect</h3>
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