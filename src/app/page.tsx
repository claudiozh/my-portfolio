import { Rubik } from 'next/font/google'
import { Skills } from '@/components/Skills'
import { Sidebar } from '@/components/Sidebar'
import { ids } from '@/utils/navlinks'
import { Home } from '@/components/Home'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Section } from '@/components/Section'
import {
  BiBriefcaseAlt2,
  BiChat,
  BiCode,
  BiDesktop,
  BiUserCheck,
} from 'react-icons/bi'
import { Experience } from '@/components/Experience'
import { Contact } from '@/components/Contact'

const rubik = Rubik({ subsets: ['latin'] })

export default function PageDefault() {
  return (
    <div className={`${rubik.className}`}>
      <header>
        <Sidebar />
      </header>

      <main className="bg-slate-100 ml-72">
        <section id={ids.home}>
          <Home />
        </section>

        <div className="md:container md:mx-auto">
          <Section title="Sobre mim" icon={<BiUserCheck />} id={ids.about}>
            <About />
          </Section>

          <Section
            title="Projetos Recentes"
            icon={<BiDesktop />}
            id={ids.projects}
          >
            <Projects />
          </Section>

          <Section title="Habilidades" icon={<BiCode />} id={ids.skills}>
            <Skills />
          </Section>

          <Section
            title="Formação & Experiência"
            icon={<BiBriefcaseAlt2 />}
            id={ids.experience}
          >
            <Experience />
          </Section>

          <Section title="Contato" icon={<BiChat />} id={ids.contact}>
            <Contact />
          </Section>
        </div>
      </main>
    </div>
  )
}
