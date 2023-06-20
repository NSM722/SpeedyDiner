import { configureStore } from '@reduxjs/toolkit'
import foodItemsReducer from '../features/foodItemsSlice'
import paymentModalReducer from '../features/paymentFormSlice'

export const store = configureStore({
  reducer: {
    foodItems: foodItemsReducer,
    paymentModal: paymentModalReducer,
  },
})