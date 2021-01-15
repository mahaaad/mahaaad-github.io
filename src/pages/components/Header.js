import React from "react"
import Links from "./headerComponents/Links"
import styled from 'styled-components'

function Header(){

    return (
        <header className = "header">
            <img className = "logo" src = "/images/icons/mrlogo.svg" />
            <Links
                tooltip="View Resume"
                link="/files/Mahad Rehan Resume.pdf"
                imgUrl="/images/icons/blackresume.svg"
            />
            <Links
                tooltip="Email"
                link="mailto:mahad.rehan@gmail.com"
                imgUrl="/images/icons/blackmail.svg"
            />
            <Links
                tooltip="View LinkedIn"
                link="https://www.linkedin.com/in/mahadrehan/"
                imgUrl="/images/icons/blacklinkedin.svg"
            />
            <Links
                tooltip="View Dribbble"
                link="https://dribbble.com/mahadR"
                imgUrl="/images/icons/blackdribbble.svg"
            />
            <Links
                tooltip="View Github"
                link="https://github.com/mahaaad"
                imgUrl="/images/icons/blackgithub.svg"
            />
        </header>
    )
}

export default Header