import { memo } from "react";
import { useWindowSize } from "hooks/useWindowSize";
import { useSelector } from "react-redux";

import MaterialTable from "material-table";

import { Props } from "./types";
import { copyDataForTables } from "utils/copyDataForTable";
import { tableIcons } from "constants/TableIcons";
import { getCustomers } from "store/customers/selectors";

const CustomersTable = memo(
  ({ tableRef, handleColumnDrag, columns }: Props): React.ReactElement => {
    const windowSize = useWindowSize();
    const { items } = useSelector(getCustomers);

    const data = copyDataForTables(items) as any;

    return (
      <MaterialTable
        data={data}
        columns={columns}
        icons={tableIcons}
        isLoading={false}
        title='Customers Info'
        onColumnDragged={handleColumnDrag}
        options={{
          toolbar: true,
          sorting: true,
          maxBodyHeight: windowSize.height > 900 ? "calc(100vh - 420px)" : 700,
        }}
        style={{
          boxShadow: "none",
          marginTop: "5%",
          border: "1px solid #E0E0E0",
          margin: "3rem auto",
          maxWidth: 1200,
        }}
      />
    );
  }
);

export default CustomersTable;
