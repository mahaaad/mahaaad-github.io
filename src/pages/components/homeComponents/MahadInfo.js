import React from "react"
import FadeIn from 'react-fade-in'
import styled from 'styled-components'
function MahadInfo(){
    function animateType(){

    }

    const Name = styled.h1`
        font-size: 5.5vw;
        float: left;

    `
    const Info = styled.h2`
        font-size: 1.25vw;
        margin-left: 0.25vw;
        float: left;

    `
    const Icon = styled.img`
        width: 1.5vw;
        margin-left: 0.75vw;
        margin-right: 0.75vw;
        margin-top: 0.25vw;
        margin-bottom: 0.25vw;
        float: left;

    `
    const Blink = styled.img   `
        margin-top: 5vw;
        width: 4vw;
        opacity: 30%;
    `

    return (
        <div style={{ position: "absolute", top: "12.5vw", left: "20vw", width: "50vw", backgroundColor: ""}}>
            <FadeIn delay={250} duration={1500}>
            <div style={{ width: "45vw", height: "6.5vw", overflow: "hidden"}}>
                <Name style={{ fontWeight: "400", paddingTop: "0.5vw", opacity: "85%"}}>{"<"}</Name>
                <Name style={{color: "#D9D9D9", fontWeight: "lighter"}}>Mahad</Name>
                <Name style={{fontWeight: "600", opacity: "85%"}}>{" Rehan /"}</Name>
                <Name style={{color: "#D9D9D9", fontWeight: "400", paddingTop: "0.5vw", float: "left"}}>{">"}</Name>
                <FadeIn delay={1500} duration={0}>
                <Blink src="/images/graphics/blinking-cursor-gif.gif" />
                </FadeIn>
            </div>

            <div style={{ width: "50vw", height: "2vw"}}>
                <FadeIn delay={150} duration={1500}>
                <Info style={{float: "left",color: "#3fb66c"}}>Software</Info>
                <Info style={{marginLeft: "0.25vw"}}>Engineer</Info>
                <Icon src = "/images/icons/computericon.svg" />
                <Info style={{float: "left", color: "#3fb66c"}}>UI / Front-End</Info>
                <Info style={{marginLeft: "0.5vw"}}>Developer</Info>
                <Icon src = "/images/icons/usericon.svg" />
                <Info style={{color: "#3fb66c"}}>CS</Info>
                <Info > @Queen’s University </Info>
                <Icon src = "/images/icons/educationicon.svg" />
                </FadeIn>
            </div>
            <p style={{width: "50vw", height: "30vw", marginTop: "1vw", opacity: "30%", fontSize: "1vw"}}>
                I am a front-end software developer and designer based in the greater Toronto area, currently
                studying computer science at Queen's University. 
                Scroll through to see my work in software/app development, design, and more.
            </p>
            </FadeIn>
        </div>
    )
}

export default MahadInfo