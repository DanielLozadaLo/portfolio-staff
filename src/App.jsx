import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="app">
      <header>
        <h1>Jerson Daniel Lozada Londoño</h1>
        <p>Ingeniero en Software | DevOps | Cloud</p>
      </header>
      <main>
        <section>
          <h2>Sobre mí</h2>
          <p>
            Soy un ingeniero apasionado por la automatización, la nube y el aprendizaje constante. Busco oportunidades como DevOps, Backend o Full Stack Developer.
          </p>
        </section>
        <section>
          <h2>Habilidades principales</h2>
          <ul>
            <li>Docker, ECS, CI/CD, GitHub Actions</li>
            <li>CloudFormation, Serverless, Wazuh, SoftEther VPN</li>
            <li>AWS, Azure, Linux</li>
          </ul>
        </section>
        <section>
          <h2>Contacto</h2>
          <ul>
            <li>Email: llozadadaniel2006@gmail.com</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/daniellozada" target="_blank">daniellozada</a></li>
            <li>GitHub: <a href="https://github.com/DanielLozadaLo" target="_blank">DanielLozadaLo</a></li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
