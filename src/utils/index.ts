//Here is the central data base, where you may change some important contente on the page

export const pageConfig = {
  nav: {
    title: 'Tails',
    link1: {
      content: 'Home',
      to: '/',
    },
    link2: {
      content: 'Receipts',
      to: '/',
    },
    link3: {
      content: 'Contact',
      to: '/',
    },
  },
  intro: {
    title: 'Prepare Cocktail Like a Bartender',
    subText:
      'Let`s make a delicious cocktail with the best recipe for some friends',
    buttonText: 'Get Started',
  },
  home: {
    inicialText: 'Find The Best Recipe For Cocktails',
    label: {
      htmlfor: 'search',
      description: 'search for something',
    },
    input: {
      placeholder: 'Search For Cocktails',
      type: 'text',
    },
  },
  bgUrl: '/src/public/backgroud/background.svg',
  bgVideoUrl: '/src/public/backgroud/videoBackground.mp4',
};
