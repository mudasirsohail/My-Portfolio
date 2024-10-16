export default function Myinfo(){
    return(
        <>
        <div className="HomeContainer"> 
      <div className="ChildContainer"> 
        Hello Everyone,
        <br />
        My Name is <span className="green">Mudasir</span>
        <br /> 
        I'm a<span className="green"> Frontend </span>  Developer
        <hr />
        <a href="https://www.linkedin.com/in/mudasir-sohail-98b399257/" className="exploremore"> Explore More </a>
      </div>
      <div id="round-image">
        <img src="mypicture-1.jpeg" alt="mypicture" className="profilepicture"></img>
      </div>
      </div>
        </>
    )
}