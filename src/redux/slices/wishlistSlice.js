import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[], //wishlist may have more than one item
    reducers:{
        //actions
        //function/logic to add items into wishlist array
        addToWishlist :(state, action)=>{
                state.push(action.payload)
        },
        //function to remove items from the wishList
        removeFromWishlist :(state, action)=>{
            //filter returns a new array satifing the condition. inorder to add the new array intyo state we need to return it
         return  state.filter(item=>item.id!=action.payload)
        }
    }

})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer