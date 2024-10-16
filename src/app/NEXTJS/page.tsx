import Header from "../components/header"
export default function NEXTJS(){
    return(
        <>
        <div className="parentContainer">
            <div className="childContainerSkills">
        <div className="imageContainer"> 
          <img src="nextjs.webp" alt="nextjs-pic" className="picture" />
        </div>
            <h2 className="headings"> Next Js </h2>
            <p> Next.js is a popular open-source React framework developed by Vercel that enables developers to build server-rendered and static web applications. It enhances the capabilities of React by providing features such as automatic server-side rendering, static site generation, and API routes.</p> 
            <hr />
            <h2><b>Key Features: </b></h2> 
            <p> Server-Side Rendering "SSR", Static Site Generation "SSG", API Routes, Automatic Code Splitting, File-Based Routing, Fast Refresh, Built-In CSS and Sass Support, Image Optimization, Internationalization "i18n",and Integration with Vercel. </p>
            <hr />
            <h2><b>Conclusion: </b></h2>
            <p> Next.js is a powerful framework that extends React's capabilities, making it ideal for building modern web applications. Its features promote improved performance, better SEO, and enhanced developer experience, positioning it as a preferred choice for many developers working with React.</p>        
        </div>
        </div>
        </>
    )
}


