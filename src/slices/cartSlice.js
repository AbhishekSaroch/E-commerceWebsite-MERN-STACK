import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     cart: localStorage.getItem("mkc")
//       ? JSON.parse(localStorage.getItem("mkc"))
//       : [],
//   };


const cartSlice = createSlice({
  name: "cart",
  initialState:[],
  reducers: {
    add: (state, action) => {
        state.push(action.payload); // Update the state directly
        // localStorage.setItem("mkc", JSON.stringify(state.action));

    },

    remove: (state, action) => {
       return state.filter((item) => item.id !== action.payload);
      // localStorage.setItem("mkc", JSON.parse(state.cart));

    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
