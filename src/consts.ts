export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'saaaadcat',
  DESCRIPTION:
    'Yo saaaadcat!!!',
  EMAIL: 'silencemonkg@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://silencemonk.github.io/',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/SilenceMonk', label: 'GitHub' },
  { href: 'https://twitter.com/enscry', label: 'Twitter' },
  { href: 'silencemonkg@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
