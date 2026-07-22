import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import hikeImg from '@/assets/images/hike.JPG'
import laosImg from '@/assets/images/laos.JPG'
import mapleImg from '@/assets/images/maple.png'
import nisekoImg from '@/assets/images/niseko.jpg'
import rollcallImg from '@/assets/images/projects/rollcall.png'
import joynestImg from '@/assets/images/projects/joynest.png'
import lannymonImg from '@/assets/images/projects/lannymon.png'
import furusatoImg from '@/assets/images/projects/furusato.png'
import expenseImg from '@/assets/images/projects/expensemanage.png'

export type ProjectTag = {
  label: string
  color: string
}

export type Project = {
  name: string
  description: string
  tags: ProjectTag[]
  link: string
  image: StaticImport
}

export type TimelineItem = {
  company: string
  title: string
  date: string
  link?: string
}

type SocialLink = {
  label: 'Github' | 'Twitter' | 'LinkedIn' | 'Instagram' | 'Email'
  link: string
}

type AboutCard = {
  src: StaticImport
  angle: string
  style: string
}

export const WEBSITE_URL = 'https://nim-fawn.vercel.app'

export const ABOUT_CARDS: AboutCard[] = [
  { src: laosImg, angle: '-8deg', style: 'top-2 left-2 sm:top-6 sm:left-[-4%] z-10' },
  { src: hikeImg, angle: '8deg', style: 'top-4 right-[calc(0.5rem+4px)] sm:top-10 sm:left-[calc(22%+4px)] z-20' },
  { src: mapleImg, angle: '-2deg', style: 'top-1 right-[calc(2.5rem+8px)] sm:top-9 sm:left-[calc(48%+8px)] z-30' },
  { src: nisekoImg, angle: '8deg', style: 'top-3 left-[calc(55%+12px)] sm:top-8 sm:left-[calc(70%+12px)] z-40' },
]

export const BULLET_COLORS = [
  'bg-yellow-600',
  'bg-blue-600',
  'bg-red-600',
  'bg-green-600',
  'bg-purple-600',
]

export const TIMELINE: TimelineItem[] = [
  {
    company: 'Revature — Cognizant',
    title: 'Software Engineer',
    date: '2026 - Now',
  },
  {
    company: 'Amazon Web Services',
    title: 'AWS Certified Cloud Practitioner',
    date: '2025 - Now',
    link: 'https://www.credly.com/badges/3b3cfd88-bbb4-40ca-8297-fb14c022e817/linked_in_profile',
  },
  {
    company: 'University of North Carolina - Charlotte',
    title: 'B.S. Computer Science',
    date: '2022 - 2024',
    link: 'https://www.charlotte.edu/',
  },
  {
    company: 'Guilford Technical Community College',
    title: 'A.S. Science',
    date: '2017 - 2021',
    link: 'https://www.gtcc.edu/',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Expense manager',
    description:
      'Expense tracking system deployed as a full DevOps pipeline with Docker, Kubernetes, AWS, CI/CD, monitoring, and caching.',
    link: 'https://github.com/lancanon/expense-manager-platform',
    image: expenseImg,
    tags: [
      { label: 'Python', color: 'bg-cyan-700' },
      { label: 'Java', color: 'bg-lime-600' },
      { label: 'React', color: 'bg-cyan-500' },
      { label: 'Docker', color: 'bg-purple-500' },
      { label: 'Kubernetes', color: 'bg-orange-400' },
      { label: 'AWS', color: 'bg-orange-600' },
    ],
  },
  {
    name: 'Rollcall',
    description:
      'task-management mobile application that inspires productivity through focused features like streaks, motivation, and simple task tracking.',
    link: 'https://github.com/nathanwince/Task-Manager',
    image: rollcallImg,
    tags: [
      { label: 'Figma', color: 'bg-blue-500' },
      { label: 'Flutter', color: 'bg-sky-400' },
      { label: 'FastAPI', color: 'bg-gray-800' },
      { label: 'SQL', color: 'bg-indigo-500' },
      { label: 'Javascript', color: 'bg-yellow-500' },
    ],
  },
  {
    name: 'Joynest',
    description:
      'e-commerce platform where users can buy, offer, and sell a wide variety of home decor and furniture',
    link: 'https://github.com/lancanon/joynest-2025',
    image: joynestImg,
    tags: [
      { label: 'Typescript', color: 'bg-sky-600' },
      { label: 'React', color: 'bg-cyan-500' },
      { label: 'Next.js', color: 'bg-gray-500' },
      { label: 'Supabase', color: 'bg-purple-400' },
    ],
  },
  {
    name: 'lannymon',
    description: 'personal social links for lannymon.net/',
    link: 'https://lancanon.github.io/',
    image: lannymonImg,
    tags: [
      { label: 'HTML', color: 'bg-green-500' },
      { label: 'CSS', color: 'bg-pink-600' },
      { label: 'JavaScript', color: 'bg-yellow-500' },
      { label: 'Supabase', color: 'bg-purple-400' },
      { label: 'AWS', color: 'bg-orange-600' },
    ],
  },
  {
    name: 'Furusato',
    description:
      '2D platformer where the player guides a lost girl through a mysterious world to find her way back home.',
    link: 'https://github.com/lancanon/furusato-gamemaker',
    image: furusatoImg,
    tags: [{ label: 'GameMaker', color: 'bg-lime-500' }],
  },
]

export const EMAIL = 'veeaudy1204@gmail.com'

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Github', link: 'https://github.com/lancanon' },
  { label: 'Twitter', link: 'https://x.com/lannymon_' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/audy-vee-384479217/' },
  { label: 'Instagram', link: 'https://www.instagram.com/lannymon_' },
  { label: 'Email', link: `mailto:${EMAIL}` },
]