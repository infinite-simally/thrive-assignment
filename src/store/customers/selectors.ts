import { RootState } from "store/rootReducer";
import { createSelector } from "reselect";
import { initialState } from "./reducer";

export const customersState = (state: RootState) =>
  state.customersData || initialState;

export const getCustomers = createSelector(
  customersState,
  (state) => state.customers
);

export const getCustomersCount = createSelector(
  customersState,
  (state) => state.customers.count
);

export const customersIsLoading = createSelector(
  customersState,
  (state) => state.isLoading
);

export const customersError = createSelector(
  customersState,
  (state) => state.error
);
