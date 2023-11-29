import axios from "axios";
import { setProductList, setTables } from '../store/reducers/tablesSlice';

let GET_UPDATES_URL = `http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT_BACK}/table/get_updates`;
let DELETE_URL = `http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT_BACK}/order/delete/`;
let FETCH_ALL_PRODUCTS_URL = `http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT_BACK}/product/get/all`;
let POST_ORDER_URL = `http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT_BACK}/order/add`;
let SET_PAID_URL = `http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT_BACK}/table/paid/`;


export const update = (dispatch) =>{
    try{
        axios.get(GET_UPDATES_URL)
            .then(response =>{
            dispatch(setTables(response.data.value))
    })
    }catch(e){
        console.log("Error")
    }
}

export const deleteOrder = (dispatch, idd) =>{
    try {
        axios.delete(DELETE_URL+idd)
          .then(()=>update(dispatch))
      } catch (error) {
        console.error("Error:");
      }
}

export const fetchAllProducts = (dispatch) =>{
    try{
        axios.get(FETCH_ALL_PRODUCTS_URL)
            .then(response =>{
            dispatch(setProductList(response.data.value))
    })
    }catch(e){
        console.error("Error")
    }
}

export const postOrder = (product, table, dispatch) =>{
    try{
        axios.post(POST_ORDER_URL, {product_id: product.id, 
                                                          table_id: table.id})
            .then(()=>update(dispatch))
    }catch(e){
        console.log("Error")
    }
}

export const setPaidTable = (id, dispatch, setActive) =>{
    try{
        axios.patch(SET_PAID_URL+id)
            .then(()=>update(dispatch))
    }catch(e){
        console.log("Error")
    }
    setActive(false)
}