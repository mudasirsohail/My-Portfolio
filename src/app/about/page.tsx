import Header from "../components/header";


export default function About_us(){
    return(
        <>  <h1 > About me  </h1>      
            <div className="aboutme">
            <h2 className="title"> Mudasir Sohail - Developer </h2>
            <p>Hi! I'm Mudasir Sohail Welcome to my portfolio! I'm a passionate FrontEnd web developer with a keen eye for design and functionality. I am pursuing an IT course of Generative AI, Web3 and Metaverse at Governor House Sindh. Where we are currently learning advanced technologies like Next JS. With a strong foundation in HTML, CSS, and TypeScript/Javascript, I enjoy creating beautiful, user-friendly websites. Over the past few months, I've worked on diverse projects, from building simple Calculator to static Student Management System. I specialize in responsive design, ensuring that every user has the best experience, no matter what device they're using.</p>
            <div className="social-profiles-about">
        <a href="https://www.linkedin.com/in/mudasir-sohail-98b399257/" target="blank">
        <img src="linkedin-yellow.png" alt="linkedin-profile" className="about-icons"/> 
        </a>
        <a href="https://www.instagram.com/mudasirsohail4/" target="blank">
        <img src="instagram.png" alt="insta-profile" className="about-icons" />
        </a>
        <a href="https://discord.com/channels/@me" target="blank">
        <img src="twitter.png" alt="twitter-profile"  className="about-icons"/>
        </a>
      </div>
            </div>
        </>
    )
}