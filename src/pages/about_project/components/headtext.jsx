import style from "../styles/headtext.module.css"


const Headtext = ({num, name})=>{
    return(
        <div className={style.container}>
            <div className={style.num}>{num}.</div>
            <div className={style.name}>{name}</div>
        </div>
    )
}

export default Headtext;