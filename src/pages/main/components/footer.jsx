import style from "../styles/footer.module.css"

import logo from "../../../imgs/main/logo-sign.png"

const Footer = () =>{
    return(
        <div className={style.container}>
            <div className={style.content}>
                <img src={logo} alt="" style={{width: "80px", height: "80px", marginRight: "20px"}} />
                <p>УУНиТ 2023</p>
            </div>
           
        </div>
    )
}

export default Footer;