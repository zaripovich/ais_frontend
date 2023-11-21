import style from "../styles/table.module.css"

import { setCurrentTableID } from "../store/reducers/tablesSlice";
import { useDispatch } from "react-redux";

const Table = (props) =>{
    const dispatch = useDispatch()

    let table = props.table

    return(
        <button className={table.active? style.table_active: style.table} onClick={()=>dispatch(setCurrentTableID(table.id))}>
            {table.id}
        </button>
    )
}

export default Table;