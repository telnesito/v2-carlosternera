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
