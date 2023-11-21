import style from "../styles/subtext.module.css"


const Subtext = ({txt}) =>{
    return(
        <div className={style.txt}>
            {txt}
        </div>
    )
}

export default Subtext;