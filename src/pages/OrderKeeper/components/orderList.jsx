import Order from "./order"
import "../styles/info.css"
import { useSelector } from "react-redux"


const OrderList = ({setSum}) =>{
  const tables = useSelector(state => state.tables.tables)
  const currentTableId = useSelector(state => state.tables.currentTableId)
  let table = tables.find(table => table.id===currentTableId)
  let orders = table.orders



  let sum = 0
  let OrdersTag = orders.map(function(element, index){
      sum += element.price
      return <Order 
                key = {element.id}
                name = {element.name} 
                price = {element.price} 
                id = {element.id} />
    })
    setSum(sum)

    
    return(
        <div>
            <div className="orderList">
                {OrdersTag}
            </div>
        </div>
        
    )
}

export default OrderList