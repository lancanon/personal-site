type ProjectTag = {
  label: string
  color: string
}

type Project = {
  name: string
  description: string
  tags: ProjectTag[]
  link: string
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
    company: 'Amazon Web Services',
    title: 'AWS Certified Cloud Practitioner',
    date: '2025',
    color: 'bg-yellow-600',
    link: 'https://www.credly.com/badges/3b3cfd88-bbb4-40ca-8297-fb14c022e817/linked_in_profile',
  },
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
    color: 'bg-red-600',
    link: 'https://www.gtcc.edu/',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Rollcall',
    description: 'task-management mobile application that inspires productivity through focused features like streaks, motivation, and simple task tracking.',
    link: 'https://github.com/nathanwince/Task-Manager',
    tags: [
      { label: 'Figma', color: 'bg-blue-500' },
      { label: 'Flutter', color: 'bg-sky-400' },
      { label: 'FastAPI', color: 'bg-gray-800' },
      { label: 'SQL', color: 'bg-indigo-600' },
      { label: 'Javascript', color: 'bg-yellow-500' },
    ],
  },
  {
    name: 'Joynest',
    description: 'e-commerce platform where users can buy, offer, and sell a wide variety of home decor and furniture',
    link:'https://github.com/lancanon/e-commere-project--2024-',
    tags: [
      { label: 'JavaScript', color: 'bg-yellow-500' },
      { label: 'Node.js', color: 'bg-red-600' },
      { label: 'Express.js', color: 'bg-orange-500' },
      { label: 'MongoDB', color: 'bg-purple-400' },
    ],
  },
  {
    name: 'lannymon',
    description: 'personal social links for lannymon.net (discontinued)',
    link:'https://lancanon.github.io/',
    tags: [
      { label: 'HTML', color: 'bg-green-500' },
      { label: 'CSS', color: 'bg-pink-600' },
      { label: 'JavaScript', color: 'bg-yellow-500' },
      { label: 'FastAPI', color: 'bg-gray-800' },
      { label: 'AWS', color: 'bg-orange-600' },
    ],
  },
  {
    name: 'Furusato',
    description: '2D platformer where the player guides a lost girl through a mysterious world to find her way back home.',
    link:'https://github.com/lancanon/e-commere-project--2024-',
    tags: [
      { label: 'GameMaker', color: 'bg-lime-500' },
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
