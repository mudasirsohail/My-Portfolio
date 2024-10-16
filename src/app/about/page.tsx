import Header from "../components/header";


export default function About_us(){
    return(
        <>  <h1 > About me  </h1>      
            <div className="aboutme">
            <h2 className="title"> Mudasir Sohail - Developer </h2>
            <p>Hi, I'm Mudasir, a passionate frontend developer with a focus on creating seamless and responsive user interfaces. I enjoy turning ideas into visually appealing and functional websites. I specialize in building user-friendly and efficient websites using modern technologies like TypeScript, Next.js, and CSS frameworks. My journey started with an interest in web design, which evolved into learning frontend technologies. I got admission in course of Generative AI, Web3, and Metaverse, where I developed projects using Next.js and TypeScript. Currently, my course is ongoing and i'm learning alot of things. Meanwhile I am enhancing my skills in responsive design and mobile-first development while building portfolio and blog websites to showcase my work. </p>
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
