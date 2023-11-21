import OrderList from "./orderList";
import "../styles/info.css"

import { useState } from "react";
import { useSelector } from "react-redux";

const Info = () =>{
    const tables = useSelector(state => state.tables.tables)
    const currentTableId = useSelector(state => state.tables.currentTableId)
    let table = tables.find(table => table.id === currentTableId)
    const [sum, setSum] = useState(0)

    return(
        <div>
            {
                <div>
                    {
                        table.active 
                        ?
                        <div>
                            <p>Стол №{table.id}</p>
                            <OrderList setSum = {setSum}/>
                            <p>Сумма: {sum} руб.</p>
                        </div> 
                        :
                        <div>
                            <p>Стол №{table.id}</p>
                            Стол свободен
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Info;