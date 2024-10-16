import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
export default function Skills() {
  return (
    <>
    <h1>Skills</h1>
      <div className="parentContainer">
      <div className="childContainer">
      <div className="imageContainer">
        <img src="html.png" alt="html-picture" className="picture" />  
      </div>
        <h3 className="headings"> HTML </h3>
        <h5>  A markup language used to structure content on the web.</h5>
          <Link href={"/HTML"}>
        <button className="readmore"> Readmore </button>
          </Link>
      </div>
      <div className="childContainer">
      <div className="imageContainer"> 
        <img src="css.svg" alt="css-picture" className="picture" />  
      </div>
        <h3 className="headings"> CSS </h3>
        <h5> A stylesheet language that describes the presentation of HTML elements.</h5>
          <Link href={"/CSS"}>
        <button className="readmore"> ReadMore </button>
          </Link>
      </div>
      <div className="childContainer">
      <div className="imageContainer"> 
          <img src="js.png" alt="js-pic" className="picture" />
      </div>
        <h3 className="headings"> Javascript </h3>
        <h5> A programming language that enables interactive features on web pages.</h5>
          <Link href={"/JS"}>
        <button className="readmore"> ReadMore </button>
          </Link>
      </div>
      <div className="childContainer">
      <div className="imageContainer"> 
          <img src="ts.png" alt="ts-picture" className="picture" />
      </div>
        <h3 className="headings"> Typescript </h3>
        <h5> A superset of JavaScript that adds static typing for improved code quality.</h5>
          <Link href={"/TS"}>
        <button className="readmore"> ReadMore </button>
          </Link>
      </div>
      <div className="childContainer">
      <div className="imageContainer"> 
          <img src="nextjs.webp" alt="nextjs-pic" className="picture" />
      </div>
        <h3 className="headings"> Next Js </h3>
        <h5> A React framework for building server-rendered applications with ease. </h5>
          <Link href={"/NEXTJS"}>
        <button className="readmore"> ReadMore </button>
          </Link>
      </div>
      <div className="childContainer">
      <div className="imageContainer"> 
        <img src="word.webp" alt="word-pic" className="picture" />
      </div>
        <h3 className="headings"> Word </h3>
        <h5> A word processing software developed by Microsoft for creating and editing text.</h5>
          <Link href={"/WORD"}>
        <button className="readmore"> ReadMore </button>
          </Link>
      </div>
      </div>
    
    </>
  );
}
