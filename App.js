import React from "react";
import Navbar from "./src/components/Navbar/navbar";
import LandingPage from "./src/components/LandingPage/landingPage";
import AboutMe from "./src/components/AboutMe/aboutMe";
import Portfolio from "./src/components/Portfolio/portfolio";
import Links from "./src/components/Links/links";
import TechStack from "./src/components/TechStack/techStack";
import Footer from "./src/components/Footer/footer";

const App = () =>{
    return (
        <div className="App">
            <Navbar/>
            <LandingPage/>
            <AboutMe/>
            <TechStack/>
            <Portfolio/>
            <Links/>
            <Footer/>
        </div>
    )
}

export default App