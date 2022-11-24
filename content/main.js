export const attributes = {
  hero: {
    firstButton: {
      icon: 'briefcase-outline',
      link: '/#portfolio',
      text: 'Portfolio',
    },
    heading: "I'm Lisa, and I create",
    image: '/img/hero.jpeg',
    secondButton: {
      icon: 'github',
      link: 'https://github.com/lisaweilguni',
      text: 'GitHub',
    },
    social: {
      facebook: { link: 'https://facebook.com', show: false },
      instagram: { link: 'https://instagram.com', show: false },
      linkedin: {
        link: 'https://www.linkedin.com/in/lisa-weilguni/',
        show: true,
      },
    },
    typed: [
      { text: 'reponsive websites.' },
      { text: 'beautiful layouts.' },
      { text: 'great user experiences.' },
    ],
  },
  about: {
    heading: 'Who am I?',
    image: '/img/about.jpeg',
    text: "I’m Lisa, a web developer based in Vienna with a business and teaching background. I am a proactive person with a growth mindset and a passion for problem-solving and design. Also, I am an avid learner and I'm curious about the world around me.\n",
  },
  features: [
    {
      icon: 'monitor-screenshot',
      text: 'Easy to use and intuitive UX/UI. Using Figma to create the design system and wireframes. \n',
      title: 'UI/UX',
    },
    {
      icon: 'draw',
      text: 'My layout will work on all devices. Confident in CSS3, Emotion and eager to learn more. \n',
      title: 'Responsive Design',
    },
    {
      icon: 'xml',
      text: 'Leaning towards frontend development, but also enjoying building fullstack applications.\n',
      title: 'Web Development',
    },
  ],
  portfolio: {
    projects: [
      {
        btnLink: 'https://schoolfinder.fly.dev',
        btnText: 'View more',
        image: '/img/schoolfinder.png',
        title: 'Schoolfinder',
      },
      {
        btnLink: 'https://next-js-ecommerce-store.fly.dev',
        btnText: 'View more',
        image: '/img/cycleria.png',
        title: 'Cycleria',
      },
      {
        btnLink: 'https://cool-sunshine-8e6a41.netlify.app',
        btnText: 'View more',
        image: '/img/landing-page.png',
        title: 'Landing Page Clone',
      },
      // {
      //   btnLink: 'https://behance.com',
      //   btnText: 'View on Behance',
      //   image: '/img/project-4.jpeg',
      //   title: 'DrawoDrawy',
      // },
      // {
      //   btnLink: 'https://behance.com',
      //   btnText: 'View on Behance',
      //   image: '/img/project-5.jpeg',
      //   title: 'PagoPagy',
      // },
      // {
      //   btnLink: 'https://behance.com',
      //   btnText: 'View on Behance',
      //   image: '/img/project-6.jpeg',
      //   title: 'UIoUXy',
      // },
    ],
    title: 'Portfolio',
  },
  footer: { text: '© Lisa Weilguni | 2022 | Vienna' },
};
