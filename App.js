import React from "react";
import Navbar from "./src/components/Navbar/navbar";
import LandingPage from "./src/components/LandingPage/landingPage";
import AboutMe from "./src/components/AboutMe/aboutMe";

const App = () =>{
    return (
        <div className="App">
            <Navbar/>
            <LandingPage/>
            <AboutMe/>
        </div>
    )
}

export default App