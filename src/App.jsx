import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data.json';

function App() {
  return (
    <div className="app">
      <header>
        <h1>{data.nombre}</h1>
        <p>{data.descripcion}</p>
      </header>

      <div className="grid-container">
        <section className="card">
          <h2>Sobre mí</h2>
          <p>{data.sobreMi}</p>
        </section>

        <section className="card">
          <h2>Contacto</h2>
          <ul>
            <li>Email: {data.contacto.email}</li>
            <li>
              LinkedIn: <a href={data.contacto.linkedin} target="_blank">daniellozada</a>
            </li>
            <li>
              GitHub: <a href={data.contacto.github} target="_blank">DanielLozadaLo</a>
            </li>
          </ul>
        </section>

        <section className="card full-width">
          <h2>Habilidades principales</h2>
          <ul>
            {data.habilidades.map((hab, i) => (
              <li key={i}>{hab}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App
