import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import hikeImg from '@/assets/images/hike.JPG'
import laosImg from '@/assets/images/laos.JPG'
import mapleImg from '@/assets/images/maple.png'
import nisekoImg from '@/assets/images/niseko.jpg'
import rollcallImg from '@/assets/images/projects/rollcall.png'
import joynestImg from '@/assets/images/projects/joynest.png'
import lannymonImg from '@/assets/images/projects/lannymon.png'
import furusatoImg from '@/assets/images/projects/furusato.png'

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
  label: 'Github' | 'Twitter' | 'LinkedIn' | 'Instagram'
  link: string
}

type AboutCard = {
  src: StaticImport
  angle: string
}

export const WEBSITE_URL = 'https://nim-fawn.vercel.app'

export const ABOUT_CARDS: AboutCard[] = [
  { src: laosImg, angle: '-8deg' },
  { src: hikeImg, angle: '-2deg' },
  { src: mapleImg, angle: '2deg' },
  { src: nisekoImg, angle: '8deg' },
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
    company: 'Cognizant',
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

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Github', link: 'https://github.com/lancanon' },
  { label: 'Twitter', link: 'https://x.com/lannymon_' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/audy-vee-384479217/' },
  { label: 'Instagram', link: 'https://www.instagram.com/lannymon_' },
]

export const EMAIL = 'veeaudy1204@gmail.com'
