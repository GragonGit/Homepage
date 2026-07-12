interface Bullet {
  text: string
  link?: string
  linkLabel?: string
  comingSoon?: boolean
}

interface TimelineItem {
  role: string
  type?: string
  date: string
  bullets?: Bullet[]
}

export interface TimelineEntry {
  title: string
  items: TimelineItem[]
}

export interface AboutSection {
  key: string
  label: string
  icon: string
  type?: 'timeline' | 'text'
  entries?: TimelineEntry[]
  content?: string[]
}

/**
 * Two shapes are supported via `type`:
 *  - 'timeline' (default): a list of organisations, each with one or
 *    more roles/degrees. Use this for Experience / Education.
 *  - 'text': a plain list of paragraphs. Use this for something like
 *    a free-form "About me" blurb.
 */
export const sections: AboutSection[] = [
  {
    key: 'experience',
    label: 'Experience',
    icon: 'material-symbols:work-sharp',
    type: 'timeline',
    entries: [
      {
        title: 'Senacor Technologies AG',
        items: [
          {
            role: 'Software Development',
            type: 'Internship & Working Student',
            date: 'September 2023 – September 2024',
            bullets: [
              { text: 'Development of a Company Google Cloud Wiki' },
              { text: 'Migration of Software from Angular 15 to 17' },
            ]
          },
        ],
      },
      {
        title: 'Heilbronn University of Applied Sciences',
        items: [
          {
            role: 'Tutor for International Exchange',
            type: 'Student Assistant',
            date: 'March 2022 – August 2023',
            bullets: [
              { text: 'Creation of Meeting Exercises'},
              { text: 'Student Help & Grading'},
            ]
          },
        ],
      },
    ],
  },
  {
    key: 'education',
    label: 'Education',
    icon: 'material-symbols:school',
    type: 'timeline',
    entries: [
      {
        title: 'Heilbronn University of Applied Sciences',
        items: [
          {
            role: 'M. Sc. Software Engineering',
            date: 'since September 2025',
            bullets: [
              { text: 'Ongoing' }
            ],
          },
          {
            role: 'B. Sc. Software Engineering',
            date: 'September 2021 – August 2025',
            bullets: [
              { text: 'GPA: 4.0' },
              {
                text: 'Bachelor Thesis Grade: 4.0',
                // link: '#',
                // linkLabel: 'Read More',
                // comingSoon: true,
              },
            ],
          },
        ],
      },
      {
        title: 'Eikei University of Hiroshima | 叡啓大学',
        items: [
          {
            role: 'Social System Design',
            date: 'October 2024 – March 2025',
            bullets: [{ text: 'GPA: 4.0' }, { text: 'Student Exchange' }],
          },
        ],
      },
    ],
  },

  // Example of how to add a free-form "About me" tab later — just
  // uncomment and fill in, no other code needs to change:
  // {
  //   key: 'aboutme',
  //   label: 'About Me',
  //   icon: 'text',
  //   type: 'text',
  //   content: [
  //     'A short paragraph about who you are.',
  //     'A second paragraph, e.g. what you are currently up to.',
  //   ],
  // },
]