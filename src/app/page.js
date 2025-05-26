'use client'

import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import Experience from '@/components/Experience'
import {Skills} from '@/components/Skills'
import Extras from '@/components/Extras'
import { Education } from '@/components/Education'
import { Projects } from '@/components/Projects'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="pt-20  space-y-24">
        <Profile />
        <Education />
        <Experience />
        <Skills />
        <Projects/>
        <Extras />
        <Footer/>
      </main>
    </div>
  )
}
