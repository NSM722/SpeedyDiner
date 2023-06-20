import { configureStore } from '@reduxjs/toolkit'
import foodItemsReducer from '../features/foodItemsSlice'

export const store = configureStore({
  reducer: {
    foodItems: foodItemsReducer,
  },
})