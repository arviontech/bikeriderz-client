import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookNowState = {
  bikeId: string;
  startTime: string;
  advancedPayment: number;
  bookingId: string;
  totalCost: number;
};

const initialState: BookNowState = {
  bikeId: "",
  startTime: "",
  advancedPayment: 100, // static advanced payment
  bookingId: "",
  totalCost: 0,
};

export const bookNowSlice = createSlice({
  name: "bookNow",
  initialState,
  reducers: {
    // When dispatching actions, you might only send a subset of the fields (like only bookingId and totalCost from the rental page). Without the if conditions, all fields in the state would be overwritten
    bookingNow: (state, action: PayloadAction<Partial<BookNowState>>) => {
      if (action.payload.bikeId !== undefined) {
        state.bikeId = action.payload.bikeId;
      }
      if (action.payload.startTime !== undefined) {
        state.startTime = action.payload.startTime;
      }
      if (action.payload.bookingId !== undefined) {
        state.bookingId = action.payload.bookingId;
      }
      if (action.payload.totalCost !== undefined) {
        state.totalCost = action.payload.totalCost;
      }
      // Update advancedPayment only if bikeId and startTime exist (i.e., new booking)
      if (action.payload.bikeId && action.payload.startTime) {
        state.advancedPayment = 100;
      } else {
        state.advancedPayment = 0; // Set advanced payment to 0 for existing rentals
      }
    },
    resetBooking: (state) => {
      state.bikeId = "";
      state.startTime = "";
      state.advancedPayment = 0;
      state.bookingId = "";
      state.totalCost = 0;
    },
  },
});

export const { bookingNow, resetBooking } = bookNowSlice.actions;
export default bookNowSlice.reducer;
