import { Fira_Code, Roboto } from 'next/font/google'
// Items utilizados en el navbar

export const NAVBARITEMS = [
  {
    number: '01',
    text: 'About'
  },

  {
    number: '02',
    text: 'Experience'
  },

  {
    number: '03',
    text: 'Work'
  },

  {
    number: '04',
    text: 'Contact'
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