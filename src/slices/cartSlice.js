import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     cart: localStorage.getItem("cartData")
//       ? JSON.parse(localStorage.getItem("cartData"))
//       : [],
//   };


const cartSlice = createSlice({
  name: "cart",
  initialState:[],
  reducers: {
    add: (state, action) => {
        state.push(action.payload); // Update the state directly
        // localStorage.setItem("cartData", JSON.stringify(state.action));

    },

    remove: (state, action) => {
       return state.filter((item) => item.id !== action.payload);
    //   localStorage.setItem("cartData", JSON.parse(state.cart));

    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
