import { createReducer } from "@reduxjs/toolkit";
import { fetchCutomers } from "./actions";

import { CustomersState } from "./types";

export const initialState: CustomersState = {
  customers: {
    pageIndex: 0,
    pageSize: 0,
    count: 0,
    items: [],
  },
  isLoading: false,
  error: null,
};

export const customersData = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCutomers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchCutomers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.customers = action.payload;
    })
    .addCase(fetchCutomers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = 500;
    });
});
