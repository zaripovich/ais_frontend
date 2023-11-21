
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";


const tablesSlice = createSlice({
    name: "tables",
    initialState: {
        tables: 
            [
                {id: 11, active: false, orders: []},
                {id: 12, active: false, orders: []},
                {id: 13, active: false, orders: []},
                {id: 14, active: false, orders: []},
                {id: 15, active: false, orders: []},
                {id: 16, active: false, orders: []}
            ],
        productList: [],
        editMode: false,
        clicked: false,
        currentTableId: 4,
    },
    reducers: {
        setTables: (state, action)=>{
            state.tables = action.payload
        },
        setCurrentTableID: (state, action) =>{
            state.currentTableId = action.payload
            state.clicked = true
        },
        setProductList: (state, action)=>{
            state.productList = action.payload
        },
        setEditMode: (state, action)=>{
            state.editMode = action.payload
        },
        setClicked: (state, action)=>{
            state.clicked = action.payload
        }
    },
});

export const {setTables, setCurrentTableID, setProductList, setEditMode, setClicked} = tablesSlice.actions;

export default tablesSlice.reducer;

