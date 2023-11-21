import axios from "axios";
import { setProductList, setTables } from '../store/reducers/tablesSlice';

let DELETE_URL = 'http://94.41.85.129:3000/order/delete/';
let FETCH_ALL_PRODUCTS_URL = "http://94.41.85.129:3000/product/get/all";
let POST_ORDER_URL = "http://94.41.85.129:3000/order/add";
let SET_PAID_URL = "http://94.41.85.129:3000/table/paid/";


export const update = (dispatch) =>{
    try{
        axios.get("http://94.41.85.129:3000/table/get_updates")
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

export const setPaidTable = (id, dispatch) =>{
    try{
        axios.get(SET_PAID_URL+id)
            .then(()=>update(dispatch))
    }catch(e){
        console.log("Error")
    }
}