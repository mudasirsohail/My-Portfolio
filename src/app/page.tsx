import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Skills from "./skills/page";
import About_us from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact-us/page";
import Myinfo from "./MyInfo/page";


export default function Home() {
  return (
    <>
      {/* <Header/> */}
      <Myinfo/>
      <Skills/>
      <About_us/>
      <Projects/>
      <Contact/>    
      {/* <Footer/> */}
    </>
  );
}
