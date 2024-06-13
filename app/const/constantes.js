import { Fira_Code, Roboto } from 'next/font/google'
// Items utilizados en el navbar

export const NAVBARITEMS = [
  {
    number: '01',
    text: 'Experiencia'
  },

  {
    number: '02',
    text: 'Proyectos'
  },

  {
    number: '03',
    text: 'Conoceme'
  },

  {
    number: '04',
    text: 'Contacto'
  },

]

// Fuente
export const firacode = Fira_Code({
  subsets: ['latin'],
  weight: '400'
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: '700'
})

// Experiencia laboral

export const EXPERIENCES = [
  {
    company: 'Cian Coders',
    time: 'Septiembre 2023 - Actual',
    responsability: ["Maquetación de interfaz gráfica atractiva y funcional.", "Integración de API y servicios de terceros, como Google Analytics y MailChimp", "Construcción de consultas SQL eficientes.", "Desarrollo de bases de datos sólidas y confiables."],
    position: 'Programador Jr'
  },
  {
    company: 'La Casona',
    time: 'Octubre 2022 - Enero 2023',
    responsability: ["Diseño y maquetación de página web estilo hotelera donde se muestre los servicios, habitaciones y las diferentes zonas del hotel.", "Integración de API como TRIPHOTEL y Google Maps", "Construccion de modelo responsive y funcional en todos los diferentes tamaño de pantalla"],
    position: 'Desarrollador Web'
  },

  {
    company: 'Metropolitano',
    time: 'Enero 2023 - Septiembre 2023',
    responsability: ["Maquetación de interfaz gráfica atractiva y funcional.", " Integración de API y servicios de terceros, como Google Analytics y MailChimp", "Construcción de consultas SQL eficientes.", " Desarrollo de bases de datos sólidas y confiables."],
    position: 'Desarrollador FullStack'
  },
]

//Habilidades

export const HABILITIES = ['HTML & CSS', 'JavaScript & TypeScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Python', 'Django REST Framework', 'Nest.js', 'Firebase', 'MongoDB', 'PosgreSQL']


// Proyectos

export const PROJECTS = [
  {
    title: 'Finapp: Agenda y asistente financiero',
    description: 'Aplicación web con inteligencia artificial para gestionar tus finanzas personales. Interfaz optimizada para dispositivos móviles y chatbot que ofrece recomendaciones personalizadas',
    technologies: ["JavaScript", "Reactjs", "Nextjs", "Firebase", "Gemini API", "Tailwind CSS"],
    image: 'finapp.svg',
    alt: 'Imagen de finapp en la seccion chatbot',
    h: 300,
    w: 300,
    url: 'https://finapp-alpha.vercel.app'
  },
  {
    title: 'Codesue: Editor de codigo en la web',
    description: 'Editor de código en línea con interfaz intuitiva, que permite a los usuarios crear, editar y gestionar proyectos de código, así como modificar sus perfiles. Incluye una sección administrativa para supervisar y controlar la plataforma.',
    technologies: ["HTML", "CSS", "JavaScript", "Reactjs", "Firebase", "MUI", "Nodejs"],
    image: 'codesue.svg',
    alt: 'Imagen de finapp en la seccion chatbot',
    h: 600,
    w: 600,
    url: 'https://editor-codigo.vercel.app/'
  },

  {
    title: 'La Casona: Landing page',
    description: 'Landing page para el hotel "La Casona" con funciones de reserva rápida por WhatsApp, galería de habitaciones, presentación interactiva de servicios, exploración de la zona y testimonios de huéspedes. Diseño responsivo y enfocado en la usabilidad.',
    technologies: ["HTML", "CSS", "JavaScript", "Reactjs"],
    image: 'lacasona.svg',
    alt: 'Imagen de finapp en la seccion chatbot',
    h: 700,
    w: 700,
    url: 'https://primera-version-la-casona.netlify.app/'
  },
]