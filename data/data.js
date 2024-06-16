const technologies = [
  { name: 'javascript', experience: '80' },
  { name: 'sass', experience: '70' },
  { name: 'java', experience: '65' },
  { name: 'lit-element', experience: '80' },
  { name: 'github', experience: '75' }
];

const information = 'Hola buen dia  :)';

const linksSocial = [
  { icon: "bitbucket", url: "https://bitbucket.org/youself3301/workspace/overview/", label: "bitbucket", library: 'my-icons' },
  { icon: "github", url: "www.google.com", label: "github", library: 'my-icons' },
];

const education = [
  { school: 'Universidad',
  certificate: 'Ingenieria en computación', startDate: '2015', endDate: '2019' },
  { school: 'Bachillerato', certificate: 'Técnico en soporte y mantenimiento de equipo de cómputo', startDate: '2012', endDate: '2015' },
  { school: 'Secundaria', certificate: '', startDate: '2009', endDate: '2012' }
];

const experience = [
  {}
];


const hobbies = [
  { startImg: '../assets/migumi1.jpeg', endImg: '../assets/migumi2.jpeg', name: 'Mascota', class: "item1", position: '0' },
  { startImg: '../assets/jugar_programar.jpg', endImg: '../assets/jugar_programar2.jpeg', name: 'jugar y programar', class: 'item2', position: '100' },
  { startImg: '../assets/musica_pelicula1.jpg', endImg: '../assets/musica_pelicula2.jpg', name: 'musica_peliculas', class: "item3", position: '100' },
  { startImg: '../assets/billar_viaje.jpeg', endImg: '../assets/billar_viaje2.jpg', name: 'billar_viaje', class: "item4", position: '100' },
]

export {
  technologies,
  linksSocial,
  information,
  education,
  hobbies
}