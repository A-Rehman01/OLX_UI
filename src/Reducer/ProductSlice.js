import { createSlice } from '@reduxjs/toolkit'
import Data from '../DummyData.json';


export const ProductSlice = createSlice({
    name: 'productlist',
    initialState: {
        items: [],
        isloading: false,
        detail: [],
        detailLoading:false,
    },

    reducers: {
        AddItems: (state, action) => {
            return {
                ...state,
                items: Data,
                isloading: true
            }
        },
        Detail: (state, action) => {
            return {
                ...state,
                detail: Data.filter((obj)=>(obj.id===action.payload)),
                detailLoading:true
            }
        }
    },
})

export const { AddItems,Detail } = ProductSlice.actions;

export const productdata = (state) => {
    return ({
        productlist: state.productlist.items,
        loading: state.productlist.isloading
    })
}

export const detailpro = (state) => {
    return ({
        detail: state.productlist.detail,
        loading: state.productlist.detailLoading
    })
}

export default ProductSlice.reducer;