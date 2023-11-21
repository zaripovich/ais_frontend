import {Link} from "react-router-dom"

import style from "../styles/title.module.css"

import computer from "../../../imgs/main/monitor.png"

const Title = () =>{
    return(
        <div>
            <div className={style.main_background}>
                <div className={style.txt}>
                    <p className={style.head}>Система управления заказами заведения</p>
                    <p className={style.sub}>OrderKeeper - средство для автоматизации работы заведения. Создавайте столы, добавляйте заказы, получайте отчеты об оплате</p>
                    <Link to={"/info"} className={style.btn}>Подробнее</Link>
                    <Link to={"/ais"} className={style.btn}>Демо</Link>
                    
                </div>
            </div>
            <img src={computer} alt="computer" className={style.img} />
        </div>
    )
}

export default Title;