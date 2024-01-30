
import { useEffect } from 'react';
import { useState } from 'react';
import {motion} from 'framer-motion'
import './App.css';
import { PrimerComponente } from './componentes/PrimerComponente';
import { SegundoComponente } from './componentes/SegundoComponente';
import imagen from './img/1.png';
import linkedin from './img/linkedin.png';
import gmail from './img/sobre.png';
import sorteo from './img/sorteo.png'
import futbol from './img/futbol.png'
import git from './img/github.png'
import { TercerComponente } from './componentes/TercerComponente';
import { CuartoComponente } from './componentes/CuartoComponente';


function App() {
  const [mousePosicion, setMouseposicion] = useState({
    x:0,
    y:0
  });
console.log(mousePosicion)
  useEffect(() => {
    const mouseMove = e => {
      setMouseposicion({
        x:e.clientX,
        y:e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosicion.x - 5,
      y: mousePosicion.y - 5
    }
  }
  
    const abrirCorreo = () => {
      // Dirección de correo electrónico prellenada
      const destinatario = 'davidmorala2001@gmail.com';
  
      // Asunto del correo (opcional)
      const asunto = 'Asunto del Correo';
  
      // Cuerpo del correo (opcional)
      const cuerpo = 'Hola David,\n\n';
  
      // Construir el enlace mailto
      const enlaceMailto = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  
      // Abrir el cliente de correo predeterminado
      window.location.href = enlaceMailto;
    };
  
 
  return (
    <div className="App">
  <motion.div className='cursor' variants={variants} animate="default"></motion.div>

  <div className="App-body">
    <div id='foto'>
      <img id='cara' src={imagen}/>
    </div>
    <PrimerComponente />
    <div id='contacto'>
      <a href="https://www.linkedin.com/in/david-morala-6551481a7" className="conta">
        <button id='lin'>
          <img id='linkedin'  src={linkedin}/>
        </button>
      </a>
   
      <button id='lin' className='conta' onClick={abrirCorreo}>
        <img id='correo' src={gmail}/>
      </button>
      
      
      <a href='https://github.com/DavidMorala'>
      <button id='lin' className='conta'>
        <img id='git' src={git}/>
      </button>
      </a>
     
    </div>
    <SegundoComponente />
    
    <h4>Proyectos</h4>

    
    <div id='proy'>
      <img id='sorteo' src={sorteo}/>
      <div className='textoProy'>
      <p id='texpro'>Organizador de partidos y resultados</p>
      <TercerComponente/>
      </div>
    </div>

    
    <div id='proy1'>
    <div className='textoProy'>
      <p id='texpro1'>Juego de penaltis realizado con JS</p>
      <CuartoComponente/>
      </div>
      <img id='futbol' src={futbol}/>
    </div>
  </div>
</div>

  );
}

export default App;
