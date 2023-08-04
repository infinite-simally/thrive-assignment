import { Column } from "material-table";
import { CustomersInfoColumns } from "./types";
import { daysBetweenDates } from "utils/daysBetweenDates";

export const CustomerInfoColumns: Column<CustomersInfoColumns>[] = [
  {
    title: "ID",
    field: "id",
    cellStyle: { minWidth: "100px" },
  },
  {
    title: "First Name",
    field: "firstName",
    cellStyle: { maxWidth: "80px" },
  },
  {
    title: "Last Name",
    field: "lastName",
    cellStyle: { maxWidth: "80px" },
  },
  {
    title: "Full Name",
    field: "fullName",
    render: ({ firstName, lastName }) => `${firstName} ${lastName}`,
  },
  {
    title: "Email",
    field: "email",
  },
  {
    title: "City",
    field: "city",
    cellStyle: { maxWidth: "80px" },
  },
  {
    title: "Registered Date",
    field: "registeredDate",
  },
  {
    title: "Days Since Registered",
    field: "dsr",
    render: ({ registeredDate }) => daysBetweenDates(registeredDate),
  },
];
