import style from "../styles/projects.module.css"

import academ from "../../../imgs/main/academ.png"
import proda from "../../../imgs/main/proda.png"

const Project = (props) =>{
    return(
        <div className={style.project} style={{marginTop: props.margin}}>
            <div className={style.content}>
                <img className={style.image} src={props.image} alt="" />
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                <h4>{props.date}</h4>
            </div>
        </div>
    )
}

const Projects = () =>{
    return(
        <div className={style.container}>
            <p className={style.txt}>Наши проекты</p>
            <div className={style.projects}>
                <Project image = {academ} 
                         title = "AcademWork" 
                         description = "Фриланс биржа, направленная на академические работы" 
                         date = "[в разработке]"/>
                <Project margin = "50px"
                         image = {academ} 
                         title = "AcademWork" 
                         description = "Фриланс биржа, направленная на академические работы" 
                         date = "[в разработке]"/>
                <Project image = {proda} 
                         title = "Proda.com" 
                         description = "Landing page для дистрибьютора продуктов питания в г. Стерлитамак" 
                         date = "[2023г.]"/>
            </div>
        </div>
    )
}

export default Projects;