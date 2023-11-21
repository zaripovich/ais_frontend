import style from "../styles/header.module.css"

import {Link} from "react-router-dom"

const Header = () =>{
    return(
        <div className={style.container}>
            <Link to = "/" className={style.btn}> На главную </Link>
        </div>
    )
}

export default Header;