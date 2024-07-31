import React from 'react'
import { Home } from './Home/Home'
import { About } from './About/About'
import { Education } from './Education/Education'
import { Skills } from './Skills/Skills'

export const Main = () => {
  return (
    <>
        <main>

            <Home />
            <About />
            <Skills/>
            <Education />
        </main>
    </>
  )
}
