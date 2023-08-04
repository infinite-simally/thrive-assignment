import { CustomersTSModel } from "api-requests/customers/getCustomers/types";

export type CustomersState = {
  customers: CustomersTSModel;
  isLoading: boolean;
  error: number | null;
};
