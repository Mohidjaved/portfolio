import Link from "next/link";

export default function navbar(){

return(<>
    <nav className="navb">
        <h2 className="main-head"><a href="#">Muhammad Mohid</a></h2>
        <ul>
            <li><Link className="nav-home" href="/">HOME</Link></li>
            <li><Link className="nav-projects" href="/projects">PROJECTS</Link></li>
            <li><Link className="nav-contact" href="/contact">CONTACT</Link></li>
        </ul>
        <p className="name-pro">Web-designer & Developer</p>
    </nav>

    </>
)}