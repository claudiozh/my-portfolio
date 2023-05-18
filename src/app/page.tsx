import { Skills } from '@/components/Skills'
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
import { Header } from '@/components/Header'

export default function PageDefault() {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Header />

        <main className="bg-slate-100 m-0 lg:ml-72">
          <section id={ids.home}>
            <Home />
          </section>

          <div className="max-w-[1150px] mx-auto">
            <Section title="Sobre mim" icon={<BiUserCheck />} id={ids.about}>
              <About />
            </Section>

            <Section title="Projetos" icon={<BiDesktop />} id={ids.projects}>
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
    </div>
  )
}
