//import { Link } from 'react-router-dom'
import './Navbar.css'
import resume from '../assets/andrewreid_resume.pdf'

export default function Navbar({ theme, toggleTheme }) {

    const handleClick = (e) => {
        toggleTheme()
    }

    return (
        <nav>
            <ul>
                {/*<Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>*/}
                <a href="https://github.com/andrewjeffreid" target="_blank" rel="noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/andrew-reid-93b807206/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={resume} target="_blank" rel="noreferrer">Resume</a>
            </ul>
            <button onClick={e => handleClick(e)}>{theme === "light" ? "Dark Mode": "Light Mode"}</button>
        </nav>
    )
}