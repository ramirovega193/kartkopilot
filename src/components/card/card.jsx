import "./card.css"
import React, { useState } from "react"



function CardWithIcon({children,cont,title}){

    return<>
        <div className="vg-card">
            <div className="vg-card-body">
                {children}
            </div>
            <div className="vg-card-bottom">
                <div className="vg-c-bottom-cont">
                    <h3 className="vg-c-title">{title}</h3>
                    {cont}
                </div>
            </div>
        </div>
    </>
}

function CardWithImage({cont,image,title}){

    
    return<>
    <div className="vg-card-i">
    <div className="vg-card-body-i">
        <div className="vg-card-body-image">{image}</div>
    </div>
    <div className="vg-card-bottom-i">
        <div className="vg-c-bottom-cont">
            <h3 className="vg-c-title">{title}</h3>
            <div className="vg-c-cont"><p>{cont}</p></div>
        </div>
    </div>
    </div>
    </>

}

function CardWithBgImage({cont,image,title,width}){


    const [mauseOn, setMauseOn] = useState("mauseOff");

    const mauseIsOver = () => {
        setMauseOn("mauseOn")
    }

    const mauseIsOut = () => {
        setMauseOn("mauseOff");
    }

    return<>

        <div className={`vg-card-b ${width}`}>
            <div className="vg-card-body-b">
                {image}
            <div className={`vg-gradient ${mauseOn}`} onMouseOver={mauseIsOver} onMouseOut={mauseIsOut}></div>
            <div className={`vg-card-bottom-b ${mauseOn}`} onMouseOver={mauseIsOver} onMouseOut={mauseIsOut}>
                <div className="vg-card-cont-b">    
                <h3>{title}</h3>
                <p>{cont}</p>
            </div>
            </div>
            </div>
        </div>
    
    </>
}


export { CardWithIcon, CardWithImage, CardWithBgImage };