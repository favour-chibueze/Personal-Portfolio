import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Favour Chibueze', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Favour Chibueze',
  subtitle: 'Software Developer',
  cta: 'Contact Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Software Developer who specializes in building and making interactive things with code. I enjoy creating accessible user interface',
  paragraphTwo: 'I am also passionate about tech and community. I am an advocate for women in tech focused on gender inclusiveness and diversity',
  paragraphThree: 'When I am not coding, you can find me volunteering and exploring different things',
  resume: 'https://docs.google.com/document/d/1xslimtEIG46R5ykvpTWr8Z6aVKqz3T-4QFTQbegnZO8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Screenshot (3).png',
    title: 'Bitcoin Currency Coverter Extension',
    info: 'This is used to calculate the amount of your bitcoin to USD or NGN',
    info2: 'Built with Html, CSS, and Javascript',
    repo: 'https://github.com/favour-chibueze/Bitcoin-Calculator-Extension', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot (205).png',
    title: 'Anime Characters Liking Web App',
    info: 'A web application for liking your favourite anime characters',
    info2: 'Built with Vuejs',
    url: 'https://anime-liking-app.netlify.app/',
    repo: 'https://github.com/favour-chibueze/A-Liking-App-With-Vue-Js', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot (207).png',
    title: 'Weather App',
    info: 'This is a web app to monitor the weather of your location. Also tells you',
    info2: 'Built with Vuejs',
    url: 'http://weatherappvuej.surge.sh/',
    repo: 'https://github.com/favour-chibueze/vuejs-weather-application', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'chibueze.favour.o@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/FavourChi__',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/favourchibueze',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/favour-chibueze',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
