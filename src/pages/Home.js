import headshot from '../assets/headshot.jpeg'
import react from '../assets/react.svg'
import mongodb from '../assets/mongodb.svg'
import node from '../assets/node.svg'
import typescript from '../assets/typescript.svg'
import java from '../assets/java.svg'
import './Home.css'

export default function Home() {
    
    return(
        <div id="flex-container">
            <div className="flex-item">
                <img src={headshot} alt="headshot" id="headshot"/>
                <h1>Andrew Reid</h1>
                <p>Baseball Player, Developer, Private Equity Analyst</p>
            </div>
            <div className="flex-item">
                <h2>About Me</h2>
                <p>For me, Texas is home. I was born and raised in Sugar Land, TX but moved to New York City to attend NYU. There, I study Finance and Computer Science and am a pitcher on the baseball team.</p>                 
                <p>I currently work at South Wake Capital. Here, I've taken part in the creation of a new hedge fund and single-handedly built out tax and accounting software for it. I also work on modeling and valuation for our existing private equity fund.</p>
            </div>
            <div className="flex-item">
                <p>I really enjoy teaching. I’ve tutored dozens of NYU students in Calculus, Discrete Math, Financial Accounting, and several sectors of Computer Science and programming languages. I’ve gone as far as building a surfing app for a final project, and I plan on creating an educational blog.</p>
                <p>I got into coding simply to build out my ideas on the side. Since then, I’ve developed a passion for full stack engineering and am most experienced working with MongoDB, Express, React, and Node. I also take computer science classes at NYU, where I write most of my code in Java and C. </p>
                <div id="dev-icon-container">
                    <img src={typescript} alt="typescript" className="dev-icon"/>
                    <img src={react} alt="react" className="dev-icon"/>
                    <img src={node} alt="node" className="dev-icon"/>
                    <img src={mongodb} alt="mongodb" className="dev-icon"/>
                    <img src={java} alt="java" className="dev-icon"/>
                </div>
            </div>
            <div className="flex-item">
                <h2>Friends</h2>
                <ul id="link-list">
                    <li><a href="https://andor.ai/" target="_blank" rel="noreferrer">Andor</a></li>
                    <li><a href="https://www.athleteswarehouse.com/" target="_blank" rel="noreferrer">AW</a></li>
                    <li><a href="https://chasealbright.com/" target="_blank" rel="noreferrer">Chase</a></li>
                    <li><a href="https://redwood-redwood.com/" target="_blank"rel="noreferrer">Hassett</a></li>
                    <li><a href="https://resume-jacobhicks.vercel.app/" target="_blank" rel="noreferrer">Jacob</a></li>
                    <li><a href='http://www.mhoffman.xyz/' target='_blank' rel="noreferrer">Matt</a></li>
                    <li><a href="https://matthoffman.myportfolio.com/" target="_blank" rel="noreferrer">Mediology</a></li>
                    <li><a href="https://www.nodetraders.com/" target="_blank" rel="noreferrer">NodeTraders</a></li>
                    <li><a href="https://www.velouniversity.com/" target="_blank" rel="noreferrer">VeloU</a></li>
                </ul>
            </div>
        </div>
    )
}