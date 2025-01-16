import { createSlice } from "@reduxjs/toolkit";
import product1 from "../assets/product-1.jpeg"
import product2 from "../assets/product-2.jpeg"
import product3 from "../assets/product-3.jpeg"

export const productSlice = createSlice({
    name: "product",
    initialState: [
        {
            id: 1,
            product_name: "Adidas Samba",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta dolorum libero fugit eveniet officiis repudiandae at perferendis accusantium velit vero.",
            stock: 20,
            price: 2000000,
            product_type: "Shoes",
            product_image: product1
        },
        {
            id: 2,
            product_name: "Nike Air Jordan",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta dolorum libero fugit eveniet officiis repudiandae at perferendis accusantium velit vero.",
            stock: 20,
            price: 1000000,
            product_type: "Shoes",
            product_image: product2
        },
        {
            id: 3,
            product_name: "Swallow Shoes",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta dolorum libero fugit eveniet officiis repudiandae at perferendis accusantium velit vero.",
            stock: 20,
            price: 10000000,
            product_type: "Shoes",
            product_image: product3
        },
    ],
    reducers: {
        addToCartProduct: (state, payload) => {
            const findProduct = state.find(p => p.id === payload.payload.id)
            if (findProduct.stock === 0) {
                alert("this product is empty!")
                return
            }
            state?.map(s => {
                if (s.id === findProduct.id) {
                    s.stock -= 1
                }
            })
        }
    }
})

export const { addToCartProduct } = productSlice.actions
export default productSlice.reducer