import React, { useEffect } from 'react'

import FadeIn from 'react-fade-in'
import Aos from 'aos';
import 'aos/dist/aos.css'
import styled from 'styled-components'
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Project from "./components/Project"
import Portfolio from "./components/Portfolio"
import SectionTitle from "./components/SectionTitle"
import OpeningAnimation from "./components/OpeningAnimation"
import Bar from "./components/Bar"

const MainPage = () =>{
    window.scrollTo(0, 0)
    const HeadShot = styled.img` 
        width: 12.5vw;
        float: left;
        margin: 1vw;
        margin-left: 3vw;
        margin-bottom: 2vw;
        box-shadow: 0px 5px 8px #00000030;
        filter: brightness(1.15);
    `
    const About = styled.p` 
        padding-left: 2vw;
        padding-right: 6vw;
        padding-top: 0vw;
        font-size: 1vw;
        text-align: justify;
        color: #B3B3B3;
    `
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return (
        <div>
        {/*<OpeningAnimation />*/}
        <script>
            document.getElementById('animation').play();
        </script>
        <Header />
        <FadeIn delay={250} duration={1000}>
        <Home />
        {/*About section*/}
        <div data-aos="fade-up" style={{marginTop: "0vw", margin: "0 auto", width: "60vw", height: "45vw"}}>
            <div style={{height: "25vw"}}>
            <h1 style={{textAlign: "center", fontSize: "2.75vw", opacity: "80%", fontWeight: "600"}}>
                Seeing the world from a designer's perspective.
            </h1>
            <HeadShot src="/images/photos/photo3.jpg" />

            <About style={{paddingTop: "2vw"}}>
            I am a 2nd year computing student at <span style={{color: "#4e4e4e"}}>Queen’s University</span> based in Toronto, Ontario currently pursuing a career
            in software development and design.
            </About>
            <About>
            Currently working with front-end technologies such as <span style={{color: "#4e4e4e"}}>React.js, Vue.js, Angular.js, </span>
             and various other front-end development tools and frameworks, while putting emphasis on 
            the artistic aspect of development. 
            </About>
            <About>
            I specialize in user interface design, illustration, and the overall aesthetics 
            of a project to deliver a professional and complete aesthetic final product.
            </About>
            </div>
            {/* Skills */}
            {/*<h1 style={{textAlign: "center", fontSize: "1.5vw", opacity: "70%", fontWeight: "400"}}>Skills </h1>*/}
            <hr style={{width: "60vw", margin: "0 auto", marginBottom: "1vw", opacity: "30%"}}/>
            <div style={{padding:"0.25vw", paddingLeft: "2vw", height: "20vw",width: "27vw", margin: "0.25vw", float: "left"}}>
                <h1 style={{fontSize: "1.5vw", opacity: "70%", fontWeight: "600"}}>Tools & Software </h1>
                <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>JavaScript</h1>
                <Bar width="18vw"/>
                <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>HTML / CSS</h1>
                <Bar width="24vw"/>
                <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>React.js</h1>
                <Bar width="23vw"/>
                <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>Vue.js</h1>
                <Bar width="20vw"/>
                <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>Angular.js</h1>
                <Bar width="12.5vw"/>
                
            </div>
            <div style={{borderLeft: "1px solid #00000030", height: "20vw", float: "left"}} />
            <div style={{padding:"0.25vw", paddingLeft: "2vw", height: "20vw",width: "27vw", margin: "0.25vw", display: "inline-block"}}>
                <h1 style={{fontSize: "1.5vw", opacity: "70%", fontWeight: "600"}}>Design </h1>
                <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>Adobe Illustrator</h1>
                <Bar width="24.5vw"/>
                <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>Adobe Photoshop</h1>
                <Bar width="24vw"/>

                <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>Adobe After Effects</h1>
                <Bar width="16vw"/>
                <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>Figma</h1>
                <Bar width="20vw"/>

            </div>
        </div>

        <About />
        {/*projects section*/}
        <SectionTitle
            data-aos="fade-up"
            title="Projects"
            icon="/images/icons/projectsgreenicon.svg"
        />
        <div  data-aos="fade-up" style={{marginLeft: "20vw", marginRight: "20vw", height: "85vw"}}>
            <Project
                float="right"
                imgFloat="left"
                projectName="Water Drink Reminder App"
                imgUrl="images/graphics/waterdrinkreminder - Copy.png"
                tech2 = "React Native"
                tech3 = "FireBase"
                tech4= "JavaScript"
                description="React Native mobile app which reminds user to drink water. Tracks
                water consumption and provides feedback based on how much the user has drank.
                "
                githublink="https://github.com/mahaaad/water-drink-app"
            />
            <Project
                float="left"
                imgFloat="right"
                projectName="Youtube Data Profile App"
                imgUrl="images/graphics/youtube2 - Copy.png"
                tech4 = "React.js"
                tech3 = "Youtube Data API"
                tech2 = "d3.js/Chart.js"
                tech1 = "Node.js"
                description="React.js web app which extracts user watch data from web-scraping and Youtube Data API V3
                to visualize data and display top channels, genres, e.t.c. Utilized d3.js and chart.js for displaying statistics
                "
                githublink="https://github.com/mahaaad/youtube-data-app"
            />
            <Project
                float="right"
                imgFloat="left"
                projectName="Memory Tiles"
                imgUrl="images/graphics/memorytiles - Copy.png"
                tech1 = "Vue.js"
                tech2 = "Anime.js"
                tech3 = "JavaScript"
                tech4 = "MongoDB"
                description="Web app developed in Vue.js intended to improve visual memory
                and spatial recall. Collected user data to display statistics to user and provide feedback on
                memory improvement.
                "
                githublink="https://github.com/mahaaad/memory-tiles-2"
            />
            <Project
                float="left"
                projectName="Side Scroller Java Game"
                imgUrl="images/graphics/maosimulator - Copy.png"
                tech4 = "Java"
                tech3 = "Swing"
                tech2 = "Object-Oriented Programming"
                tech1 = ""
                description="Story based side-scroller game based in Java Swing. Uses sorting/searching and object-oriented
                programming to include features such as score, multiple players, user data, e.t.c. Features original
                art work and sound track.
                "
                githublink="https://github.com/mahaaad/zhengmao-simulator-2"
            />


        </div>

        {/*Design Portfolio Section*/}
        <SectionTitle
            data-aos="fade-up"
            title="Design Portfolio"
            icon="/images/icons/portfoliogreenicon.svg"
        />
    
        <div  data-aos="fade-up" className ="portfoliosection" style={{marginLeft: "20vw",width: "70vw", height: "60vw"}}>
            <Portfolio
              height="25vw"
              title="Illustration" 
              img="/images/illustration/imad.png"
              imgWidth = "26vw"
              description="
              View a collection of my illustration and vector art work done in Adobe Creative Suite Software
              such as Photoshop and Illustrator
              "
            />
            <Portfolio 
              height="25vw"
              title="UI Design"
              img="/images/graphics/waterdrinkreminder2.png"
              imgWidth = "26vw"
              description="
              My portfolio of website and mobile app interface designs and mockups
              "
            />
            <Portfolio 
              height="20vw"
              title="Advertising" 
              img="/images/graphics/x.png"
              imgWidth = "26vw"
              description="
                Collection of posters, cards, logos, and other promotional content meant for advertising
              "
            />
            <Portfolio
              height="22.5vw"
              title="Miscellaneous" 
              img="/images/graphics/vscode - Copy.png"
              imgWidth = "26vw"
              description="
                View other relevant design work, IDE/code editor themes, and personal projects
              "
            />
        </div>

        {/*Get In Touch Section*/}
        <div  data-aos="fade-up" style={{width: "70vw", height: "20vw", marginLeft: "15vw", marginRight: "15vw"}}>
        <hr style={{ opacity: "30%", marginBottom: "2vw"}} />
        <h1 style={{fontSize: "3vw", opacity: "80%", float: "left",  marginLeft: "4vw"}}>{"<"}</h1>
        <h1 style={{fontSize: "3vw", opacity: "30%", float: "left", marginRight: "1vw"}}>Get In </h1>
        <h1 style={{fontSize: "3vw", opacity: "80%", float: "left"}}> Touch /</h1>
        <h1 style={{fontSize: "3vw", opacity: "15%", float: "left"}}>{">"}</h1>
        <p style={{marginTop: "-1vw", marginBottom: "10vw", float: "left", marginLeft: "3vw", fontWeight: "lighter", fontSize: "1vw", opacity: "50%", paddingRight: "7.5vw"}}>
            I am currently seeking software roles, freelancing opportunities, and open to collaborate as well .
            Feel free to reach out me or if you have any questions at <a href="mahad.rehan@gmail.com">mahad.rehan@gmail.com </a>
            or at <a href="https://linkedin.com/in/mahadrehan">https://linkedin.com/in/mahadrehan</a>
        </p>
        </div>
        <Footer />
        </FadeIn>
    </div>
    )
}

export default MainPage
