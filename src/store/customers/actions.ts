import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCustomers } from "api-requests/customers/getCustomers";
import { CustomersTSModel } from "api-requests/customers/getCustomers/types";

type AsyncThunkOptions = {
  rejectValue: number;
  rejectWithValue?: any;
};

export const fetchCutomers = createAsyncThunk<CustomersTSModel, void>(
  "customers/fetchCutomers",
  async () => {
    try {
      return await getCustomers();
    } finally {
    }
  }
);
