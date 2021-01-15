import React from "react"
import MahadInfo from "./homeComponents/MahadInfo"
import NavIcons from "./homeComponents/NavIcons"
import Scene from "./homeComponents/Scene"
import FadeIn from 'react-fade-in'

function Home(){

    return (
        <div style={{height: "55vw"}}>
            <MahadInfo />
            <div className="navicons">
                <NavIcons
                    scroll={0}
                    id="mricon"
                    icon="images/icons/mrlogo.svg"
                />
                <NavIcons
                    scroll={ [document.documentElement.clientWidth] * 0.455}
                    id="abouticon"
                    icon="images/icons/abouticon.svg"
                />
                <NavIcons
                    scroll={ [document.documentElement.clientWidth] * 1}
                    id="projectsicon"
                    icon="images/icons/projectsicon.svg"
                />
                <NavIcons 
                    scroll={ [document.documentElement.clientWidth] * 2.075}
                    id="portfolioicon"
                    icon="images/icons/portfolioicon.svg"
                />

            </div>
            <script>
                navIconScroll()
            </script>
            <Scene />
        </div>
    )
}

export default Home