import style from "../styles/images.module.css"

const Images = ({images}) =>{

    let imgs = images.map(function(element, index){
        return <img src={element} alt="" className={style.image}></img>
    })

    return(
        <div className={style.container}>
            {imgs}
        </div>
    )
}

export default Images