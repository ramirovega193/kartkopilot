import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CardWithIcon} from "./components/card/card"
import { FaGear } from "react-icons/fa6";
import { Boton } from "./components/button/button"
import { useInView } from 'react-intersection-observer';

function SectionCards(){

    const [ref,inView] = useInView();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{

        if(inView && isVisible === false) {
          setIsVisible(!isVisible)
        }else if(inView === false && isVisible === true){
          setIsVisible(!isVisible)
        }

    },[inView, isVisible]);


  return<>
      <section>
        <div className="contenedor-cartas">
          <div ref={ref} className='inicio-cards'>

          <div className={`cards card1 ${isVisible ? 'visible' : ''}`}>
            <CardWithIcon cont="Guarda la informacion que necesitas para tus carreras facilmente"><FaGear size={40}/></CardWithIcon>
          </div>

          <div className={`cards card2 ${isVisible ? 'visible' : ''}`}>
            <CardWithIcon cont="Guarda la informacion que necesitas para tus carreras facilmente"><FaGear size={40}/></CardWithIcon>
          </div>

          <div className={`cards card3 ${isVisible ? 'visible' : ''}`}>
            <CardWithIcon cont="Guarda la informacion que necesitas para tus carreras facilmente"><FaGear size={40}/></CardWithIcon>
          </div>

          </div>
        </div>
      </section>
      </>
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>    

      <header>
        <div className="contenedor-header">
          <div className="header-buttons">
            <div className="cont-buttons">
              <Boton conte="Iniciar sesion" format="vacio" color="secundary-o" />
              <Boton conte="Registrarse" format="vacio" color="secundary-o" />
            </div>
          </div>
          <div className="header-image">
              <div className="cont-image">
                <img className="inicio-imagen"src="./assets/Logos/KartKopilot.svg" alt="inicio imagen" />
              </div>
          </div>
        </div>
      </header> 

      <SectionCards />

    </>
  )
}

export default App
