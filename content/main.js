export const attributes = {
  hero: {
    firstButton: {
      icon: 'briefcase-outline',
      link: '/#portfolio',
      text: 'Portfolio',
    },
    heading: "I'm Lisa, and I create",
    image: '/img/laptop.jpg',
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
    heading: "Hi, I'm Lisa",
    image: '/img/lisa.jpg',
    text: "I’m a web developer based in Vienna with a business and teaching background. I'm a curious person with a growth mindset and a passion for problem-solving and design. I'm confident in React, Typescript, Next.js, CSS3, Emotion, Testing and constantly grow my tech stack.\n",
  },
  features: [
    {
      icon: 'monitor-screenshot',
      text: 'Easy to use and intuitive UX/UI. Creating design systems and wireframes in Figma. \n',
      title: 'UI/UX',
    },
    {
      icon: 'draw',
      text: 'My layouts will work on all devices. Confident in CSS3, Emotion and eager to learn more. \n',
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
    ],
    title: 'Portfolio',
  },
  footer: { text: '© Lisa Weilguni | 2022 | Vienna' },
};
