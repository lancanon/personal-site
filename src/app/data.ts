type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Experience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}


type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Rollcall',
    description:
      ' task-management mobile application that inspires productivity through focused features like streaks, motivation, and simple task tracking.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Joynest',
    description: 'e-commerce platform where users can buy, offer, and sell a wide variety of home decor and furniture',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    company: 'B.S. Computer Science',
    title: 'University of North Carolina - Charlotte',
    start: '2022',
    end: '2024',
    link: 'https://www.charlotte.edu/',
    id: 'work1',
  },
  {
    company: 'A.S. Science',
    title: 'Guilford Technical Community College',
    start: '2017',
    end: '2021',
    link: 'https://www.gtcc.edu/',
    id: 'work2',
  },
]

export const SOCIAL_LINKS = [
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
