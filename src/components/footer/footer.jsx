import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer(){

    return<>
    
    <footer>
        <div className="contenedor-footer">
            <div className="footer-text">
                Ramiro Vega - Desarrollo independiente - 2024
            </div>

            <div className="footer-redes">
                <div className="redes">
                    <FaInstagram size={25}/> <span className="spanRedes">Instagram</span>
                </div>
                <div className="redes">
                    <SiGmail size={25}/> <span className="spanRedes">Gmail</span>
                </div>
                <div className="redes">
                    <FaLinkedin size={25}/> <span className="spanRedes">LinkedIn</span>
                </div>
                <div className="redes">
                    <FaGithub size={25}/> <span className="spanRedes">Github</span>
                </div>


            </div>
        </div>
    </footer>
    </>

}
