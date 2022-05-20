import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cart",
  initialState: {
    userProduct:[],
    itemsQuantity:0,
  },
  // name: "cart",
  // initialState: {
  //   userProduct:[],
  //   itemsQuantity:0,
  //   totalPrice: [],
  // },
  reducers: {
    addProduct: (state, action) => {
      // state.quantity += 1;
      // state.userProduct.push(action.payload);
     const itemIndexIn = state.userProduct.findIndex((item) => item.id === action.payload.id);
     if(itemIndexIn >= 0){
      state.userProduct[itemIndexIn].cartQuantity +=1
      state.itemsQuantity += 1;
     
     }else{
      const tempProduct = {...action.payload,cartQuantity:1}
      state.itemsQuantity += 1;
      state.userProduct.push(tempProduct);
           }

        
    },increaseProduct : (state,action) => {
      const itemIndex = state.userProduct.findIndex((item) => item.id === action.payload.id);
        if(itemIndex >=0){
          state.userProduct[itemIndex].cartQuantity +=1;
          console.log( state.userProduct[itemIndex].cartQuantity);
          state.itemsQuantity ++;
              console.log("yes i have increase it by 1");
        }
    },
    removeProduct : (state,action) =>{
      // const itemIndexIcon = state.userProduct.findIndex((item) => item.id === action.payload.id);
      // if(itemIndexIcon >=0){
        let tot = state.userProduct.filter((item)=> item.id != action.payload.id);
        state.userProduct = tot;
        let woler = state.cartQuantity - action.payload.cartQuantity;
        state.itemsQuantity = woler;
      // console.log(tot)
      // }

    },
    // price : (state,action) => {
    //   const priceItem = {...action.payload}
    //   state.totalPrice.push(priceItem);
    //   console.log(state.totalPrice);
    //   console.log("i am here");
    // },
    deleteProduct :(state,action) => {
      const itemIndexFor = state.userProduct.findIndex((item) => item.id === action.payload.id);
      if(itemIndexFor >=0){
        if(state.userProduct[itemIndexFor].cartQuantity >=1){
          state.userProduct[itemIndexFor].cartQuantity --;
          state.itemsQuantity --;
          // console.log( state.userProduct)
        }else if(state.userProduct[itemIndexFor].cartQuantity === 0){
          state.userProduct = state.userProduct.filter((item)=> item.id != action.payload.id);
          console.log("successful deleted item");
          
      //  let items = state.userProduct.findIndex((item) => item.id === action.payload.id);
      //  console.log(items);
      //  if(items > -1) {
      //    state.userProduct.splice(items,1);
      //    state.quantityCart -= 1;
      //  }
       console.log(state.userProduct);

          // console.log(deleteItem);
          console.log("i am deleted");
        }
      }
    }
  },
});

export const { addProduct,deleteProduct,increaseProduct, removeProduct,price } = cartSlice.actions;
export default cartSlice.reducer;