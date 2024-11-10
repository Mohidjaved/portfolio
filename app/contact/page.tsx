import Link from "next/link";
import Image from "next/image";

export default function contact(){
    return(
        <>
        <div className="contact-bg">
            <div className="overlay">
        <div className="contact-head">
            <h3>Need A Website?</h3>
        </div>
        <div className="contact-ref">
            <p>Contact Us Here</p>
        </div>

        <div className="linkedin">
            <Image alt="linkedin" src="/linkedin.png" width={50} height={50}></Image>
            <Link target="_blank" href="https://www.linkedin.com/in/mohid-javed-7a5753317">Linked In</Link>
        </div>
        <div className="email">
            <Image alt="email" src="/email.png" width={50} height={50}></Image>
            <Link target="_blank" href="mailto:mohidjaved2006@gmail.com">Email Us</Link>
        </div>

        <div className="git-sec">

        </div>
        <div className="git-head">
            <h3>Want to see my code?</h3>
        </div>
        <div className="git-ref">
            <p>My Github is Here</p>
        </div>

        <div className="github">
            <Image alt="github" src="/github.png" width={50} height={50}></Image>
            <Link target="_blank" href="https://github.com/Mohidjaved">Github</Link>
        </div>


        <div className="ending">
            <p>Thanks for visiting our website</p>
        </div>


        </div>
        </div>
        </>
    )
}