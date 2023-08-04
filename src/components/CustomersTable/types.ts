export type CustomersInfoColumns = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  city: string;
  registeredDate: string;
  dsr: string;
};

export type Props = {
  tableRef?: HTMLDivElement;
  handleColumnDrag?: any;
  columns?: any;
};
