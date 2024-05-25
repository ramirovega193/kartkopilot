import { useState, useEffect } from 'react'
import './App.css'
import {CardWithIcon} from "./components/card/card"
import { FaGear } from "react-icons/fa6";
import { Boton } from "./components/button/button"
import { useInView } from 'react-intersection-observer';
import { FaCalculator } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";
import Footer from "./components/footer/footer"

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
            <CardWithIcon cont="Calcula los cambios que debes hacer para mejorar tu rendimiento"><FaCalculator size={40} /></CardWithIcon>
          </div>

          <div className={`cards card3 ${isVisible ? 'visible' : ''}`}>
            <CardWithIcon cont="Almacena los archivos de adquisicion de datos o videos de forma segura y accesible"><MdOutlineSaveAlt size={40} /></CardWithIcon>
          </div>

          </div>
        </div>
      </section>
      </>
}


function SectionImages(){

  
    const [ref1,inViewImg1] = useInView();
    const [isVisibleImg1, setIsVisibleImg1] = useState(false);

    const [ref2,inViewImg2] = useInView();
    const [isVisibleImg2, setIsVisibleImg2] = useState(false);

    const [ref3,inViewImg3] = useInView();
    const [isVisibleImg3, setIsVisibleImg3] = useState(false);

    useEffect(()=>{

        if(inViewImg1 && isVisibleImg1 === false) {
          setIsVisibleImg1(!isVisibleImg1)
        }else if(inViewImg1 === false && isVisibleImg1 === true){
          setIsVisibleImg1(!isVisibleImg1)
        }
    },[inViewImg1, isVisibleImg1])


    useEffect(()=>{

      if(inViewImg2 && isVisibleImg2 === false) {
        setIsVisibleImg2(!isVisibleImg2)
      }else if(inViewImg2 === false && isVisibleImg2 === true){
        setIsVisibleImg2(!isVisibleImg2)
      }
  },[inViewImg2, isVisibleImg2])

  useEffect(()=>{

    if(inViewImg3 && isVisibleImg3 === false) {
      setIsVisibleImg3(!isVisibleImg3)
    }else if(inViewImg3 === false && isVisibleImg3 === true){
      setIsVisibleImg3(!isVisibleImg3)
    }
    },[inViewImg3, isVisibleImg3])


    return<>
    
      <section>
        <div className="inicio-imagen">
          <div ref={ref1} className="i-imagen-1">
            <div className={`i-imagen-texto ${isVisibleImg1 ? 'visibleImg' : ''}`}>
                <h2>Calculadora RPM</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia maxime quasi similique facere fugiat amet doloremque veniam corrupti facilis totam dolorum voluptate nemo, esse eius officiis reiciendis? Sunt, iste?Lorem ipsum dolor sit amet consectetur adipisicing    elit. Ducimus, eos maxime minus dignissimos commodi quam doloribus! Sunt recusandae rem  reprehenderit! Veritatis atque porro ratione ad, eum reiciendis ducimus dolor consequatur.</p>
            </div>
            <div className={`i-imagen-img ${isVisibleImg1 ? 'visibleImg' : ''}`}>
                <img src="/assets/Imagenes/example.jpg" alt="" className="i-img" />
            </div>
          </div>



          <div ref={ref2} className="i-imagen-1">
            <div className={`i-imagen-texto ${isVisibleImg2 ? 'visibleImg2' : ''}`}>
                <h2>Guarda tus Sesiones y videos</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia maxime quasi similique facere fugiat amet doloremque veniam corrupti facilis totam dolorum voluptate nemo, esse eius officiis reiciendis? Sunt, iste?Lorem ipsum dolor sit amet consectetur adipisicing    elit. Ducimus, eos maxime minus dignissimos commodi quam doloribus! Sunt recusandae rem  reprehenderit! Veritatis atque porro ratione ad, eum reiciendis ducimus dolor consequatur.</p>
            </div>
            <div className={`i-imagen-img ${isVisibleImg2 ? 'visibleImg2' : ''}`}>
                <img src="/assets/Imagenes/example.jpg" alt="" className="i-img" />
            </div>
          </div>





          <div ref={ref3} className="i-imagen-1 margin-bottom">
            <div className={`i-imagen-texto ${isVisibleImg3 ? 'visibleImg3' : ''}`}>
                <h2>Almacena la informacion de tus circuitos</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia maxime quasi similique facere fugiat amet doloremque veniam corrupti facilis totam dolorum voluptate nemo, esse eius officiis reiciendis? Sunt, iste?Lorem ipsum dolor sit amet consectetur adipisicing    elit. Ducimus, eos maxime minus dignissimos commodi quam doloribus! Sunt recusandae rem  reprehenderit! Veritatis atque porro ratione ad, eum reiciendis ducimus dolor consequatur.</p>
            </div>
            <div className={`i-imagen-img ${isVisibleImg3 ? 'visibleImg3' : ''}`}>
                <img src="/assets/Imagenes/example.jpg" alt="" className="i-img" />
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

      <SectionImages />

      <Footer />

    </>
  )
}

export default App
