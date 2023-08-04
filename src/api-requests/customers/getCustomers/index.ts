import { faker } from "@faker-js/faker";
import { createCustomers } from "faker-data/createCustomers";
import { Customer } from "faker-data/types";
import { CustomersTSModel } from "./types";

export const getCustomers = async (): Promise<CustomersTSModel> => {
  // The way it would look like with real api:
  //   const response = await ajax.get(ENDPOINTS.CUSTOMERS);
  //   return response.data;

  faker.seed(123);
  const items = createCustomers();

  const data = {
    items,
    pageSize: 50,
    pageIndex: 0,
    count: 500,
  };

  return data;
};
