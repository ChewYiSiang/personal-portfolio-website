import Hero           from '@/components/sections/Hero'
import Skills         from '@/components/sections/Skills'
import Certifications from '@/components/sections/Certifications'
import Projects       from '@/components/sections/Projects'
import Experience     from '@/components/sections/Experience'
import TheLab         from '@/components/sections/TheLab'
import Education      from '@/components/sections/Education'
import Contact        from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <TheLab />
      <Education />
      <Contact />
    </>
  )
}
