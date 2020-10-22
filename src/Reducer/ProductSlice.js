import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Data from '../DummyData.json';


export const ProductSlice = createSlice({
    name: 'productlist',
    initialState: {
        items: [],
        isloading: false,
    },

    reducers: {
        AddItems :(state,action)=>{
            return{
                ...state,
                items: Data,
                isloading: true
            }
        }
    },
})

export const { AddItems } = ProductSlice.actions;

export const productdata = (state) => {
    return ({
        productlist: state.productlist.items,
        loading: state.productlist.isloading
    })
}

export default ProductSlice.reducer;