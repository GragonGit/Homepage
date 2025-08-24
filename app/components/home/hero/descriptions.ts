export enum DescriptionKey {
  Default = 'default',
  Projects = 'projects',
  Games = 'games',
  About = 'about',
  Blog = 'blog',
}

export type Description = {
  key: DescriptionKey
  title: string
  description: string
  imageUrl: string
}

export const descriptions: Record<DescriptionKey, Description> = {
  [DescriptionKey.Default]: {
    key: DescriptionKey.Default,
    title: 'Hi, I\'m Tristan',
    description: 'I\'m a Software Engineer from Germany. I\'m specialised in frontend and game development.',
    imageUrl: '/images/hero/default.png'
  },
  [DescriptionKey.Projects]: {
    key: DescriptionKey.Projects,
    title: 'My Projects',
    description: 'The projects I work or have worked on during my free time. Here I learn new technologies and improve my software engineering skills.',
    imageUrl: './images/hero/projects.png'
  },
  [DescriptionKey.Games]: {
    key: DescriptionKey.Games,
    title: 'Games',
    description: 'I love game development for the unique problems it poses. These are the games I created.',
    imageUrl: './images/hero/games.png'
  },
  [DescriptionKey.About]: {
    key: DescriptionKey.About,
    title: 'About & Skills',
    description: 'Learn more about me and my skills. Explore the path which led me where I am now.',
    imageUrl: './images/hero/default.png'
  },
  [DescriptionKey.Blog]: {
    key: DescriptionKey.Blog,
    title: 'Blog & Devlogs',
    description: 'Like every software engineer I have some opinions and this is the place where I write them down. There are also some Devlogs to read.',
    imageUrl: './images/hero/blog.png'
  },
}
