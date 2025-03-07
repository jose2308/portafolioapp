const technologies = [
  { name: 'javascript', },
  { name: 'typescript'},
  { name: 'sass'},
  { name: 'java'},
  { name: 'lit-element'},
  { name: 'git'},
  { name: 'vueJS' },
  { name: 'springboot'},
  { name: 'jenkins'},
  { name: 'tailwind'},
  { name: 'SQL'},
  
];

const information = 'user-information';

const linksSocial = [
  { icon: "bitbucket", url: "https://bitbucket.org/youself3301/workspace/repositories/", label: "bitbucket", library: 'my-icons' },
  { icon: "git", url: "https://github.com/jose2308", label: "github", library: 'my-icons' },
  { icon: "cv", url: "../assets/CurriculumMartinezZallas2025.pdf", label: "cv", library: 'my-icons' },
];

const education = [
  { school: 'user-university-title',
  certificate: 'user-university-1', startDate: '2015', endDate: '2019' },
  { school: 'user-high-school-title', certificate: 'user-high-school-title-1', startDate: '2012', endDate: '2015' },
  { school: 'user-secondar-title', certificate: '', startDate: '2009', endDate: '2012' }
];

const experience = [
  { company: 'user-company-indra-title', position: 'user-company-indra-position', activities: [
    'user-company-indra-activity-1',
    'user-company-indra-activity-2'
  ]},
  { company: 'user-company-bbva-title', position: 'user-company-bbva-position', activities: [
    'user-company-bbva-activity-1',
    'user-company-bbva-activity-2',
    'user-company-bbva-activity-3',
    'user-company-bbva-activity-4',
    'user-company-bbva-activity-5',
    'user-company-bbva-activity-6',
    'user-company-bbva-activity-7',
  ]}
];


const hobbies = [
  { startImg: '../assets/migumi1.jpeg', endImg: '../assets/migumi2.jpeg', name: 'Mascota', class: "item1", position: '0' },
  { startImg: '../assets/jugar_programar.jpg', endImg: '../assets/jugar_programar2.jpeg', name: 'jugar y programar', class: 'item2', position: '100' },
  { startImg: '../assets/musica_pelicula1.jpg', endImg: '../assets/musica_pelicula2.jpg', name: 'musica_peliculas', class: "item3", position: '100' },
  { startImg: '../assets/billar_viaje.jpeg', endImg: '../assets/billar_viaje2.jpg', name: 'billar_viaje', class: "item4", position: '100' },
];

const languages = [
  { language: 'English', icon: 'english', lang: 'en' },
  { language: 'Español', icon: 'espanol', lang: 'es' }
];

const projects = [{
  nameProject: 'MoviesApp',
  description: 'user-project-movie-app',
  image: '../assets/movieApp.png',
  accesibility: 'user-project-movie-app-accesibility',
  link: '',
  technologies: ['Lit-element', 'html', 'bootstrap']
},
{
  nameProject: 'DragonBallApp',
  description: 'user-project-dragon-ball-app',
  image: '../assets/dragonBallApp.png',
  accesibility: 'user-project-dragon-ball-app-accesibility',
  link: 'https://dragonball.martinezzallasdev.com/',
  technologies: ['VueJS', 'Javascript', 'Typescript', 'Tailwind']
},]

export {
  technologies,
  linksSocial,
  information,
  education,
  hobbies,
  languages,
  experience,
  projects
}