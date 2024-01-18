export const navbarLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Service",
    link: "/",
  },
  {
    title: "About",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
];

interface ServiceTypes {
  title: string;
  content: string;
  lists: {
    listItem: string;
  }[];
  icon: string;
}

export const service: ServiceTypes[] = [
  {
    title: "Branding",
    content:
      "A brand is your company&apos;s personality and promise to your customer. See what our branding agency has to offer",
    icon: `<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.583 5.445h.01M8.86 16.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 10.31 1l5.734.007A1.968 1.968 0 0 1 18 2.983v5.5a.994.994 0 0 1-.316.727l-7.439 7.5a.975.975 0 0 1-1.385.001Z"/>
  </svg>`,
    lists: [
      {
        listItem: "Assessment of the Brand Framework",
      },
      {
        listItem: "Examine the Current Marketing Efforts",
      },
      {
        listItem: "Review Customer Feedback",
      },
      {
        listItem: "Analyzing your Current Website Traffic",
      },
      {
        listItem:
          "Development of a New Brand Strategy / Brand Messaging / Brand Design",
      },
    ],
  },
  {
    title: "Web Design",
    content:
      "A great website is easy to navigate. It’s visually pleasing but not distracting. Our company specializes in custom web design.",
    icon: `<svg className="w-6 h-6 text-gray-800 dark:text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>`,
    lists: [
      {
        listItem: "Assessment of the Brand Framework",
      },
      {
        listItem: "Examine the Current Marketing Efforts",
      },
      {
        listItem: "Review Customer Feedback",
      },
      {
        listItem: "Analyzing your Current Website Traffic",
      },
      {
        listItem:
          "Development of a New Brand Strategy / Brand Messaging / Brand Design",
      },
    ],
  },
  {
    title: "Search Engine Marketing",
    content:
      "You have a story to tell, but it&apos;s no good if your audience can&apos;t find it. Learn more about our search engine marketing services.",
    icon: `<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1v14h16M4 10l3-4 4 4 5-5m0 0h-3.207M16 5v3.207"/>
  </svg>`,
    lists: [
      {
        listItem: "Assessment of the Brand Framework",
      },
      {
        listItem: "Examine the Current Marketing Efforts",
      },
      {
        listItem: "Review Customer Feedback",
      },
      {
        listItem: "Analyzing your Current Website Traffic",
      },
      {
        listItem:
          "Development of a New Brand Strategy / Brand Messaging / Brand Design",
      },
    ],
  },
  {
    title: "Copywriting",
    content:
      "Content is king as they say! Our editors will help you capture your audience’s attention through our copywriting services.",
    icon: `<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M9.338 12.276a1.614 1.614 0 1 0 0-3.228 1.614 1.614 0 0 0 0 3.228Z"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2.111 17.889 6.086-6.086m2.663-7.228 4.565 4.565-2.283 6.086L2.461 19 1 17.539 4.774 6.858l6.086-2.283Zm5.205 5.203-5.843-5.842L13.158 1 19 6.843l-2.935 2.935Zm-5.113.884a1.614 1.614 0 1 1-3.228 0 1.614 1.614 0 0 1 3.228 0Z"/>
  </svg>`,
    lists: [
      {
        listItem: "Assessment of the Brand Framework",
      },
      {
        listItem: "Examine the Current Marketing Efforts",
      },
      {
        listItem: "Review Customer Feedback",
      },
      {
        listItem: "Analyzing your Current Website Traffic",
      },
      {
        listItem:
          "Development of a New Brand Strategy / Brand Messaging / Brand Design",
      },
    ],
  },
  {
    title: "Publishing",
    content:
      "Our agency roots are in storytelling and publishing. Digital Ink was born from BOSS, our legacy online magazine.",
    icon: `<svg className="w-6 h-6 text-gray-800 dark:text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>`,
    lists: [
      {
        listItem: "Assessment of the Brand Framework",
      },
      {
        listItem: "Examine the Current Marketing Efforts",
      },
      {
        listItem: "Review Customer Feedback",
      },
      {
        listItem: "Analyzing your Current Website Traffic",
      },
      {
        listItem:
          "Development of a New Brand Strategy / Brand Messaging / Brand Design",
      },
    ],
  },
  {
    title: "Branding",
    content:
      "A brand is your company&apos;s personality and promise to your customer. See what our branding agency has to offer",
    icon: `<svg className="w-6 h-6 text-gray-800 dark:text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    </svg>`,
    lists: [
      {
        listItem: "Assessment of the Brand Framework",
      },
      {
        listItem: "Examine the Current Marketing Efforts",
      },
      {
        listItem: "Review Customer Feedback",
      },
      {
        listItem: "Analyzing your Current Website Traffic",
      },
      {
        listItem:
          "Development of a New Brand Strategy / Brand Messaging / Brand Design",
      },
    ],
  },
];


interface WorksTypes {
  image : string,
  title : string,
  description : string
}
export const works : WorksTypes[]=[
  {
    image : '/home2.png',
    title : 'Project',
    description : 'lorem Hell How are You i am fine'
  },
  {
    image : '/home6.png',
    title : 'Project',
    description : 'lorem Hell How are You i am fine'
  },
  {
    image : '/home3.png',
    title : 'Project',
    description : 'lorem Hell How are You i am fine'
  },
  {
    image : '/home5.png',
    title : 'Project',
    description : 'lorem Hell How are You i am fine'
  },
  {
    image : '/home7.jpg',
    title : 'Project',
    description : 'lorem Hell How are You i am fine'
  },
  {
    image : '/hom8.png',
    title : 'Project',
    description : 'lorem Hell How are You i am fine'
  },
]


interface ProcessTypes {
  title : string,
  description : string,
}
export const designProcess : ProcessTypes[] =[
  {
    title : 'Web Strategy',
    description : 'Before we put pen to paper (or start on your digital design, rather), we conduct thorough research into your industry, competitors and target market to gather insights.',
  },
  {
    title : 'Planning & Information Architecture',
    description : 'Next, we map out your unique landing pages and define your site map and navigation. We create a plan for SEO strategy.',
  },
  {
    title : 'Responsive Development',
    description : 'In the development phase, our expert development team works behind the scenes to build a custom, secure and scalable solution for your brand, on your chosen platform.',
  },
  {
    title : 'Launch & Optimization',
    description : 'When our QA is complete, it&apos;s time for launch! Our team will set up your server,  make sure all updates are finalized. We&apos;ll provide security protection, along with both internal and external monitoring.',
  },
]

interface FooterTypes {
  title : string,
  links : {
    link : string,
    subTitle : string
  }[]
}

export const FooterLinks : FooterTypes[] =[
  {
    title : 'Categories',
    links : [
      {
        link : '/',
        subTitle : 'Home'
      },
      {
        link : '/about',
        subTitle : 'About'
      },
      {
        link : '/Contact',
        subTitle : 'Contact'
      },
      {
        link : '/services',
        subTitle : 'Services'
      },
    ]
  },
  {
    title : 'Categories',
    links : [
      {
        link : '/',
        subTitle : 'Home'
      },
      {
        link : '/about',
        subTitle : 'About'
      },
      {
        link : '/Contact',
        subTitle : 'Contact'
      },
      {
        link : '/services',
        subTitle : 'Services'
      },
    ]
  },
  {
    title : 'Categories',
    links : [
      {
        link : '/',
        subTitle : 'Home'
      },
      {
        link : '/about',
        subTitle : 'About'
      },
      {
        link : '/Contact',
        subTitle : 'Contact'
      },
      {
        link : '/services',
        subTitle : 'Services'
      },
    ]
  },
]



















