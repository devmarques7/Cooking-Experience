//Here is the central data base, where you may change some important contente on the page

export const pageConfig = {
  user: {
    nameUser: 'Daniel Marques',
    instagramUser: 'danielmfgp',
    gitHubUser: 'devmarques7',
    linkedinUser: 'devmarques7',
  },
  nav: {
    title: 'Tails',
    link1: {
      content: 'Home',
      to: '#home',
    },
    link2: {
      content: 'Receipts',
      to: '#receipts',
    },
    link3: {
      content: 'Contact',
      to: '#contact',
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
  carrosel: {
    amountOfDrinks: 20,
  },
  bgUrl: '/src/public/backgroud/background.svg',
  bgVideoUrl: '/src/public/backgroud/videoBackground.mp4',
};
