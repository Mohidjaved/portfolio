"use client"

import { useRouter } from "next/navigation"; 


export default function Home() {
  const router = useRouter(); // Initialize useRouter

  const handleButtonClick = () => {
    router.push('/contact'); // Navigate to the contact page
  };

  return (
   <>
   <div className="bg-image">
    <div className="overlay">
      <h2 className="portfolio-head">MY PORTFOLIO</h2>
      <p className="home-hero">
      Hi, My name is Muhammad Mohid. I design and build user-friendly websites with a passion for creating smooth, interactive experiences. Currently expanding my expertise in Front-end Development to push creative boundaries.
      </p>

      <button className="need-btn" onClick={handleButtonClick}>I Need A Website</button>
    </div>
   </div>
   </>
  );
}
