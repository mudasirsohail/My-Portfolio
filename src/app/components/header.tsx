import Link from "next/link"

export default function Header(){
    return(

        
            <ul className="header-button">
                <Link href={"/home"}><li className="headerbuttons"> Home </li></Link>
                <Link href={"/skills"}><li className="headerbuttons"> Skills </li></Link>
                <Link href={"/about"}><li className="headerbuttons"> About </li></Link>
                <Link href={"/projects"}><li className="headerbuttons"> Projects </li></Link>
                <Link href={"/contact-us"}><li className="headerbuttons"> Contact Us </li></Link>
            </ul>
    
    )
}