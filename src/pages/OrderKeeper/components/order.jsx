import "../styles/info.css"
import { deleteOrder } from "../requests/requests";
import { useDispatch } from "react-redux";

const Order = (props) =>{
    const dispatch = useDispatch()
    
    return(
        <div className="orderStroke">
            <div className="order">
                <p>{props.name}</p>
                <p>{props.price}руб</p>
            </div>
            <div className="deleteOrder" onClick={()=>deleteOrder(dispatch, props.id)}>X</div>
        </div>
    )
}

export default Order;