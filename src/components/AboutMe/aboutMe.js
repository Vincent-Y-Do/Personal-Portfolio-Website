import React from "react";
import './aboutMe.css';
import webDesign from '../../assets/webDesign.png';
import database from '../../assets/database.png';
import security from '../../assets/security.png';
import adaptation from '../../assets/adaptation.png';

const AboutMe = () => {
    return (
        <section id="aboutMe"> 
            <span className="aboutMeTitle">What I do</span>
            <span className="aboutMeDescription">As a Full-stack engineer, I bring expertise in React, JavaScript, HTML, CSS, Node.js, Express.js, and MongoDB. With proficiency across these technologies, I develop end-to-end solutions, integrating front-end interfaces with scalable back-end architectures. My commitment to staying updated ensures that I consistently deliver efficient and innovative software solutions.</span>
            <div className="aboutMeBars">
                <div className="aboutMeBar">
                    <img className="skillBarImg" src={webDesign} alt='Web Design'></img>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>I have developed various web page designs, 
                            utilizing CSS and TailwindCSS to create visually appealing and user-friendly interfaces. 
                            These responsive designs ensure accessibility across all devices, 
                            providing a seamless experience for users.
                        </p>
                    </div>
                </div>
                <div className="aboutMeBar">
                    <div className="skillBarText">
                        <h2>Database Design</h2>
                        <p>I have constructed SQL databases using PostgreSQL and NoSQL databases with MongoDB. 
                            Additionally, I have designed database schemas to efficiently organize and structure data
                            resulting in easier manipulation and querying of that data.
                        </p>
                    </div>
                    <img className="skillBarImg" src={database} alt='Database Design'></img>
                </div>
                <div className="aboutMeBar">
                    <img className="skillBarImg" src={security} alt='Security Implementation'></img>
                    <div className="skillBarText">
                        <h2>Security Implementation</h2>
                        <p>I have employed various technologies for user authentication and security, 
                            such as bcrypt, JSON Web Tokens, and OAuth. 
                            This approach enhanced security, boosted performance, and ensured interoperability 
                            between applications.
                        </p>
                    </div>
                </div>
                <div className="aboutMeBar">
                    <div className="skillBarText">
                        <h2>Agile Adaptation</h2>
                        <p>Drawing on my expertise as a Professional Scrum Master, 
                            I have applied agile methodology to the development of numerous applications 
                            resulting in greater flexibility in adapting to changing stakeholder requirements.
                        </p>
                    </div>
                    <img className="skillBarImg" src={adaptation} alt='Agile Adaptation'></img>
                </div>
            </div>

        </section>
    )
}

export default AboutMe;