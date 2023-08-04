import { Customer } from "faker-data/types";

export type CustomersTSModel = {
  pageIndex: number;
  pageSize: number;
  count: number;
  items: Customer[];
};
