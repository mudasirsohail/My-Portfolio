export default function Footer(){
    return(
        <footer>
      <div className="Footer">
        <p className="footer-text">Mudasir Sohail</p>
      <div className="social-profiles">
        <a href="https://www.linkedin.com/in/mudasir-sohail-98b399257/" target="blank">
        <img src="linkedin.png" alt="linkedin-profile" className="footer-icons"/> 
        </a>
        <a href="https://github.com/mudasirsohail" target="blank">
        <img src="github.png" alt="github-profile" className="footer-icons" />
        </a>
        <a href="https://discord.com/channels/@me" target="blank">
        <img src="discord.png" alt="discord-profile"  className="footer-icons"/>
        </a>
      </div>
        <br />
        <p className="footer-text-last"> © Web Developer. All rights deserved</p>
      </div>
    </footer>
    )
}