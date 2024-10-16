import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
export default function Projects(){
    return(
        <>
        <h1>Projects</h1>
        <div className="parentContainerProjects">
            <div className="childContainerProjects">
                <img src="calculator.jpg" alt="calculator picture" className="project_pictures" />
                <a href="https://github.com/mudasirsohail/Calculator-using-inquirer-TS.git"> <button className="clichere"> Click here </button></a>
            </div>
            <div className="childContainerProjects">
                <img src="noguessinggame.png" alt="noguessing picture" className="project_pictures" />
                <a href="https://github.com/mudasirsohail/Typescript-Number-Guessing-Game-.git"> <button className="clichere"> Click here </button></a>
            </div>
            <div className="childContainerProjects">
                <img src="ATM.png" alt="ATM Picture" className="project_pictures" />
                <a href="https://github.com/mudasirsohail/ATM-Machine-Project.git" > <button className="clichere"> Click here </button></a>
            </div>
            <div className="childContainerProjects">
                <img src="TodoList.png" alt="Todo List" className="project_pictures" />
                <a href="https://github.com/mudasirsohail/A-Todo-List-Project.git" > <button className="clichere"> Click here </button></a>
            </div>
            <div className="childContainerProjects">
                <img src="CurrencyConverter.png" alt="CurrencyConverterPicture" className="project_pictures" />
                <a href="https://github.com/mudasirsohail/Currency-Converter.git" > <button className="clichere"> Click here </button></a>
            </div>
            <div className="childContainerProjects">
                <img src="WordCounter.png" alt="wordCounterPic" className="project_pictures" />
                <a href="https://github.com/mudasirsohail/Word-Counter.git" > <button className="clichere"> Click here </button></a>
            </div>
            <div className="childContainerProjects">
                <img src="StudentManagementSystem.png" alt="StudentManagementSystemPicture" className="project_pictures" />
                <a href="https://github.com/mudasirsohail/Student-Management-System.git" > <button className="clichere"> Click here </button></a>
            </div>
        </div>
        </>
    )
}