import style from "../styles/ourteam.module.css"
import dinar from "../../../imgs/main/dinar.png"
import timur from "../../../imgs/main/timur.png"
import alsu from "../../../imgs/main/alsu.png"
import zulfira from "../../../imgs/main/zulfira.png"

const Teammate = (props) =>{
    return(
        <div className={style.teammate}>
            <img src={props.photo} alt="" className={style.img} />
            <div className={style.txt}>
                <h3>{props.name}</h3>
                <p>Роль: {props.role}</p>
                <p>Телефон: {props.phone}</p>
            </div>
        </div>
    )
}

const OurTeam = () =>{
    return(
        <div className={style.container}>
            <div className={style.txt}>
                <p className={style.head}>Наша команда</p>
                <p className={style.sub}>
                    OrderKeeper был разработан в рамках проектной работы по дисциплине 
                    "Администрирование информационных систем" следующими студентами группы ПРО-429 
                    </p>
            </div>
            
            <div className={style.teammates}>
                <div className={style.column}>
                    <Teammate photo = {alsu} name = "Алсу Яппарова" role = "Тимлид" phone = "+79999999999"/>
                    <Teammate photo = {timur} name = "Тимур Зарипов" role = "Back-end developer" phone = "+79999999999"/>
                </div>
                <div className={style.column}>
                    <Teammate photo = {zulfira} name = "Зульфира Сафаргалина" role = "HR" phone = "+79999999999"/>
                    <Teammate photo = {dinar} name = "Динар Сулейманов" role = "Front-end developer" phone = "+79999999999"/>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;