import Header from "../components/header"

export default function HTML(){
    return(
      <>
        <div className="parentContainer">
        <div className="childContainerSkills">
        <div className="imageContainer">
        <img src="html.png" alt="html-picture" className="picture" />  
        </div>
        <h2 className="headings"> HTML </h2>
        <p>  HTML, or HyperText Markup Language, is the standard markup language used for creating web pages. It structures content on the web, defining elements like headings, paragraphs, links, images, and more.</p>
       <hr />
        <h2><b> Key Concepts: </b> </h2>
        <p>Markup Language, Elements, Tags, Attributes, Document Structure, Block and Inline Elements, Semantic HTML, Forms and Input, Multimedia Support, HTML5, and Accessibility. </p>
        <hr />
        <h2><b> Conclusion: </b> </h2> 
        <p>HTML is fundamental to web development, providing the essential structure needed for web pages. Understanding its theoretical aspects, including elements, attributes, and semantics, is crucial for creating effective and accessible web content. </p>
      </div>
      </div>
      </>
    )
}