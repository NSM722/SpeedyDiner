import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheckout: false
}

const paymentModal = createSlice({
  name: 'paymentModal',
  initialState,
  reducers: {
    openForm: (state) => {
      state.isCheckout = true
    },
    closeForm: (state) => {
      state.isCheckout = false
    }
  }
})

export const { openForm, closeForm } = paymentModal.actions
export default paymentModal.reducer