import { INavLink } from '@/interfaces/navlink'

export type INavIds =
  | 'home'
  | 'about'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'contact'

export const ids: Record<INavIds, string> = {
  home: 'home',
  about: 'about',
  projects: 'projects',
  skills: 'skills',
  experience: 'experience',
  contact: 'contact',
}

export const navLinks: INavLink[] = [
  {
    id: ids.home,
    label: 'Home',
  },
  {
    id: ids.about,
    label: 'Sobre',
  },
  {
    id: ids.projects,
    label: 'Projetos',
  },
  {
    id: ids.skills,
    label: 'Habilidades',
  },
  {
    id: ids.experience,
    label: 'Experiência',
  },
  {
    id: ids.contact,
    label: 'Contato',
  },
]
