import style from "../styles/menu.module.css"
import "../styles/info.css"


import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteOrder, fetchAllProducts, postOrder, setPaidTable } from "../requests/requests"
import { setClicked, setEditMode} from "../store/reducers/tablesSlice"



const Menu = (props) =>{
    const editMode = useSelector(state => state.tables.editMode)
    const clicked = useSelector(state => state.tables.clicked)
    const tables = useSelector(state => state.tables.tables)
    const currentTableId = useSelector(state => state.tables.currentTableId)
    let table = tables.find(table => table.id === currentTableId)

    const dispatch = useDispatch()

    useEffect(() => {
        fetchAllProducts(dispatch)
      }, []);
    

    const Editor = () =>{
        const productList = useSelector(state => state.tables.productList)

        const Product = ({pos}) =>{
            return(
                <button className={style.button} onClick={()=>postOrder(pos, table, dispatch)}>
                    {pos.name} - {pos.price}
                </button>
            )
        }
        
        let ProductsTag = productList.map(function(element, index){
            return <Product pos = {productList[index]}/>
        })
    
        return(
            <div className={style.menu_container}>
                <p>Редактирование заказа</p>
                {ProductsTag}
            </div>
        )
    }
    

    return(
        <div>
            {
                clicked
                ?
                <div className={style.menu_container}>
                    <p>Стол №{table.id}</p>
                    {
                        editMode
                        ?
                        <div className={style.menu_container}>
                            <Editor/>
                            <button className={style.button__save} onClick={() => dispatch(setEditMode(false))}>Сохранить</button>
                            <button className={style.button} onClick={() => dispatch(setEditMode(false))}>Закрыть</button>
                        </div>
                        :
                            table.active
                            ?
                            <div className={style.menu_container}>
                                <button className={style.button} onClick={()=>dispatch(setEditMode(true))}>Редактировать заказ</button>
                                {table.orders.length > 0 && <button className={style.button} onClick={()=>setPaidTable(table.id, dispatch, setEditMode)}>Расчитать и закрыть стол</button>}
                                <button className={style.button} onClick={()=>dispatch(setClicked(false))}>Закрыть</button>
                            </div>
                            :
                            <div className={style.menu_container}>
                                <p>Стол свободен</p>
                                <button className={style.button} onClick={()=>dispatch(setEditMode(true))}>Создать заказ</button>
                                <button className={style.button} onClick={()=>dispatch(setClicked(false))}>Закрыть</button>
                            </div>
                    }
                </div>
                :
                <div>
                    Выберите стол
                </div>
            }
            
        </div>
    )
}

export default Menu;