'use client'

import About from '@/components/portfolio/About'
import Contact from '@/components/portfolio/Contact'
import Footer from '@/components/portfolio/Footer'
import Header from '@/components/portfolio/Header'
import Projects from '@/components/portfolio/Projects'
import TechStackSearch from '@/components/portfolio/TechStack'

import { useGetData } from '@/hooks/useGetData'

export default function Home() {
  const { data, isLoading, error } = useGetData()

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 font-sans flex items-center justify-center">
      {isLoading && <p>Carregando...</p>}
      {error && <p>Erro ao carregar os dados.</p>}
      {data && (
        <div className="w-full max-w-6xl flex flex-col items-center text-center gap-12">
          <Header data={data.person} avatar={data.avatar} />
          <About about={data.person.about} />
          <TechStackSearch data={data.techs} />
          <Projects data={data.projects} />
          <Contact contact={data.contacts} social={data.contacts.socialMedia} />
          <Footer github={data.contacts.socialMedia.github} name={data.person.name} />
        </div>
      )}
    </div>
  )
}
