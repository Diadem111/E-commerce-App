import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "users",
  initialState: {
    usersArray: []
  },

  reducers : {
      addUser: (state, action) => {
        const tempProduct = {...action.payload}
        state.usersArray.push(tempProduct);
        console.log("success")

      }
  }
})


export const { addUser } = cartSlice.actions;
export default cartSlice.reducer;
