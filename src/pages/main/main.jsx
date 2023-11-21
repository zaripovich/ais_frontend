import style from "./styles/main.module.css"
import Title from "./components/title";
import OurTeam from "./components/ourteam";
import Projects from './components/projects';
import Footer from "./components/footer"

const Main = () =>{
    return(
        <div className={style.container}>
            <Title/>
            <div className={style.line}></div>
            <OurTeam/>
            <div className={style.line}></div>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default Main;