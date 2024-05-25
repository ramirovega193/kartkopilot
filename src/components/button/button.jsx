import "./button.css"

function Boton({conte,format,color}){

    return<>
        <button className={`kk-button ${format} ${color}`}>{conte}</button>
    </>

}

export {Boton}