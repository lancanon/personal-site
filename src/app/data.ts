type ProjectTag = {
  label: string
  color: string
}

type Project = {
  name: string
  description: string
  tags: ProjectTag[]
}

type TimelineItem = {
  company: string
  title: string
  date: string
  color: string
  link?: string
}

type SocialLink = {
  label: string
  link: string
}

export const TIMELINE: TimelineItem[] = [
  {
    company: 'University of North Carolina - Charlotte',
    title: 'B.S. Computer Science',
    date: '2022 - 2024',
    color: 'bg-blue-600',
    link: 'https://www.charlotte.edu/',
  },
  {
    company: 'Guilford Technical Community College',
    title: 'A.S. Science',
    date: '2017 - 2021',
    color: 'bg-yellow-600',
    link: 'https://www.gtcc.edu/',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Rollcall',
    description: 'task-management mobile application that inspires productivity through focused features like streaks, motivation, and simple task tracking.',
    tags: [
      { label: 'Figma', color: 'bg-blue-500' },
      { label: 'Flutter', color: 'bg-sky-400' },
      { label: 'FastAPI', color: 'bg-gray-800' },
      { label: 'MySQL', color: 'bg-green-600' },
      { label: 'Javascript', color: 'bg-yellow-500' },
    ],
  },
  {
    name: 'Joynest',
    description: 'e-commerce platform where users can buy, offer, and sell a wide variety of home decor and furniture',
    tags: [
      { label: 'JavaScript', color: 'bg-yellow-500' },
      { label: 'Node.js', color: 'bg-red-600' },
      { label: 'Express.js', color: 'bg-orange-500' },
      { label: 'MongoDB', color: 'bg-purple-400' },
    ],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/lancanon',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/lannymon_',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/audy-vee-384479217/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/lannymon_',
  },
   {
    label: 'Bluesky',
    link: 'http://bsky.app/profile/lannymon.bsky.social',
  },
]

export const EMAIL = 'veeaudy1204@gmail.com'
