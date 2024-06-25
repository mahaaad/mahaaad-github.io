import React from "react"

function OpeningAnimation(){

    return(
        <div id="animation" style={{zIndex: "6", position: "absolute", top: "0", left: "0", backgroundColor: "white", width: "100vw", height: "100vw"}}>
            <img style={{width:"7vw", marginLeft: "45vw", marginTop: "20vw"}} src="/images/icons/mrlogo.png"/>
            {/*<video autoplay muted id="animation" className= "animation" >
                <source src="animation/Comp 1_1.mp4" type="video/mp4" />
            </video>*/}
        </div>
    )

}

export default OpeningAnimation