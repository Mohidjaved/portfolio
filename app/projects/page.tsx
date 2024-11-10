import Link from "next/link";
import Image from "next/image";

export default function projects(){
    return(
<>
<div className="bg-portfolio">
    <div className="overlay">
        <p className="portfolio-text">
        Built a responsive portfolio site to showcase my work and skills. Implemented using Next JS, with custom CSS and smooth animations for enhanced user engagement.
        </p>

        <div  className="port-1">
        <Link target="_blank" href="https://editable-resume-muhammad-mohids-projects.vercel.app/">
        <div className="image-wrapper"><Image src="/project-1.png" alt="portfolio" width={150} height={150}  ></Image></div></Link>

        <p className="proj-1-name">Resume Builder</p>
        </div>

        <div className="note">
            <h3>New Projects will Upload soon...</h3>   
        </div>


    </div>
</div>



</>
 )
}