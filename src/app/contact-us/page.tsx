import Image from "next/image";
import Header from "../components/header";


export default function Contact(){
    return(
        <>
            <h1> Get In Touch </h1>
                <div className="parentcontact">
                    <div className="contact-text"> 
                        <p className="title">Let's Connect</p>
                        <p> Hey! I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you</p>
                        <div className="contact-icons">
                        <img src="gmail.png" alt="gmail.picture" className="footer-icons-contact"/> 
                        <p className="mail">mudasirsohailsoomro@gmail.com</p>
                        </div>
                        
                    </div>
                <div className="contactus">
                    <form action="" method="POST">
                            <div className="inputs">
                            <input type="text" placeholder="Name" className="design" required/>
                            <input type="text" placeholder="Email" className="design" required/>
                            <input type="text" placeholder="Your Message" className="designMessage" required/>
                            <button className="button">Send Message</button>
                            </div>
                            <br />
                            
                    
                    </form>
                </div>
                </div>
          
        </>
    )
}