import './style.css'
import React from 'react';
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite! Orlando Betancourth</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

  import './MiComponente.css'; // Asegúrate de importar tu archivo CSS con la animación

const MiComponente = () => {
  return (
    <div className="mi-elemento">
      ¡Soy un elemento animado!
    </div>
  );
}

export default MiComponente;
`

setupCounter(document.querySelector('#counter'))
