import React from "react"
import FadeIn from 'react-fade-in'

function Scene(){
    return (
        <div>
            <img className = "mahadvector" src = "/images/graphics/mahadvector2.svg" />
            <img className = "sidewalk" style = {{marginTop: "45.5vw", width: "100%",  boxShadow: "0px 5px 8px #00000030"}} src = "/images/graphics/sidewalk.svg" />
            <hr style = {{position: "absolute", top: "50vw", left: "5vw", width: "40%", opacity: "30%"}} />
            <img className = "arrowicon" src = "/images/icons/arrowicon.svg" />
            <hr style = {{position: "absolute", top: "50vw", left: "51vw", width: "40%", opacity: "30%"}} />
        </div>
    )
}

export default Scene