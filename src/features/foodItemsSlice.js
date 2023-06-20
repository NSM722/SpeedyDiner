import { createSlice } from "@reduxjs/toolkit";
import { menuArray } from "../foodItems";

const initialState = {
  foodItems: menuArray,
  amountOfItems: 0,
  totalPrice: 0
}

const foodItemsSlice = createSlice({
  name: 'foodItems',
  initialState,
  reducers: {
    incrementFoodItem: (state, action) => {
      const itemToIncrement = state.foodItems.find(elem => elem.id === action.payload)
      itemToIncrement.amount = itemToIncrement.amount + 1
    },
    decrementFoodItem: (state, action) => {
      const itemToDecrement = state.foodItems.find(elem => elem.id === action.payload)
      itemToDecrement.amount = itemToDecrement.amount - 1

    },
    removeFoodItem: (state, action) => {  
      const itemToRemoveId = action.payload
      state.foodItems = state.foodItems.filter(food => food.id !== itemToRemoveId)
    },
    // clearOrder: (state) => {
    //   state.foodItems = []
    // },
    calculateTotalSum: (state) => {
      let totalAmount = 0
      let totalPrice = 0
      state.foodItems.forEach(foodItem => {
        totalAmount += foodItem.amount
        totalPrice += (foodItem.price * foodItem.amount)
      })
      state.amountOfItems = totalAmount
      state.totalPrice = totalPrice
    }
  }
})

// console.log(foodItemsSlice)
export const { incrementFoodItem, decrementFoodItem, removeFoodItem, clearOrder, calculateTotalSum } = foodItemsSlice.actions
export default foodItemsSlice.reducer