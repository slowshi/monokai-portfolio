export interface ExperienceItem {
  title: string
  employer: string
  description: string
  stack: string[]
  image: string
  imageAlt: string
  date: string
  link: string
}

export interface ProjectItem {
  title: string
  description: string
  stack: string[]
  image: string
  imageAlt: string
  date: string
  link: string
  github: string
}

export interface Info {
  name: string
  title: string
  location: string
  description: string
  github: string
  linkedin: string
  email: string
  resume: string
}

export const info: Info = {
  name: 'Monokai Portfolio',
  title: 'Programmer',
  location: 'Earth',
  description: 'Stay hungry, stay foolish.',
  github: 'https://github.com/slowshi/monokai-portfolio',
  linkedin: 'https://www.linkedin.com/',
  email: 'example@example.com',
  resume: '/resume/monokai_resume.pdf',
}

export const experience: ExperienceItem[] = [
  {
    title: 'Chief Technical Officer',
    employer: 'Twitter',
    description: 'Built an app that people can post their status.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    image: '/twitter.png',
    imageAlt: 'Twitter',
    date: '2006-2019',
    link: 'https://twitter.com/',
  },
  {
    title: 'Founder',
    employer: 'Google',
    description: 'AskJeeves was not cutting it.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    image: '/google.png',
    imageAlt: 'Google',
    date: '1998 - 2006',
    link: 'https://google.com/',
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Bitcoin',
    description: 'Made digital gold that can be sent anywhere.',
    stack: ['C++'],
    image: '/Bitcoin.png',
    imageAlt: 'Bitcoin',
    date: '2009',
    link: 'https://ftx.com/',
    github: 'https://github.com/',
  },
]
