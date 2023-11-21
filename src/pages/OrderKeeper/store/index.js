

import { configureStore } from '@reduxjs/toolkit'
import tablesReducer from "./reducers/tablesSlice"


export const store = configureStore({
    reducer:{
        tables: tablesReducer,
    },
})