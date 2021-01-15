import React from "react"
import styled from 'styled-components'

function Footer(){
    const Icon = styled.img` 
        width: 0.75vw;
        float: left;
        margin: 0.35vw;
    `
    const Link = styled.div`
        transition: ease-in-out 0.2s;
        opacity: 35%;
        &:hover{
            transform: scale(1.025);
            transition: ease-in-out 0.2s;
            cursor: pointer;
            opacity: 100%;
        }
    `
    return (
        <div style={{width: "22.5vw", height: "3vw", margin: "0 auto"}}>
            <h1 style={{lineHeight: "0%", opacity: "35%", fontSize: "0.75vw", fontWeight: "lighter", marginTop: "5%", textAlign: "center"}}>Designed and developed by Mahad Rehan © Mahad Rehan 2021</h1>
            <a href="https://github.com/mahaaad" target="_blank">
            <Link>
                <Icon src="/images/icons/github.png" style={{marginLeft: "7vw"}} />
                <h1 style={{color: "black", fontSize: "0.75vw", margin: "0.25vw", float: "left"}}>GitHub</h1>
            </Link>
            </a>
            <a href="https://linkedin.com/in/mahadrehan/" target="_blank">
            <Link>
                <Icon src="/images/icons/blacklinkedin.svg" />
                <h1 style={{color: "black", fontSize: "0.75vw", margin: "0.25vw", float: "left"}}>LinkedIn</h1>
            </Link>
            </a>
        </div>
    )
}

export default Footer