# Len Lester's Portfolio

This is my portfolio website. I wanted to keep it simple and list the things that I've done in the past with links to my resume and other socials.

I chose Monokai as the theme for the site.

### Stack

- Vite
- React
- Tailwind

## Getting Started

I have abstracted all content to the `/src/constants.tsx` file. Simply update the values in this this file to make this portoflio your own.

- Install node packages and run dev

```
npm ci
npm run dev
```

- Add your resume to `/public/`

- Update `/src/constants.tsx`. Everything can be updated from this file. You can add new projects, experience and update all links and resume references. I am adding the TypeScript interfaces below to get an idea of every object.

```javascript
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
```
