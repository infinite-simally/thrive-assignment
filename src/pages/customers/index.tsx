import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchCutomers } from "store/customers/actions";

import CustomersTable from "components/CustomersTable";
import { CustomerInfoColumns } from "components/CustomersTable/tableColumns";

import "./styles.css";

type Props = {
  currentUser?: string;
};

const CustomersPage = ({ currentUser }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchCutomers());
  }, []);

  const savedCustomColumnOrder = localStorage.getItem("customColumns");

  let changedColumns = savedCustomColumnOrder
    ? JSON.parse(savedCustomColumnOrder || "")
    : CustomerInfoColumns;

  function handleColumnDrag(sourceIndex: any, destinationIndex: any) {
    const sourceColumn = changedColumns[sourceIndex];
    const destinationColumn = changedColumns[destinationIndex];

    // Swapping the column order
    changedColumns[sourceIndex] = destinationColumn;
    changedColumns[destinationIndex] = sourceColumn;
  }

  const onSaveColumns = () => {
    localStorage.setItem("customColumns", JSON.stringify(changedColumns));
  };

  const onReloadColumns = () => {
    localStorage.clear();
  };

  return (
    <div className='cutomersPageContainer'>
      {currentUser && (
        <div className='actions'>
          <button className='actionsBtn save' onClick={onSaveColumns}>
            Save
          </button>
          <button onClick={onReloadColumns} className='actionsBtn reload'>
            Reload
          </button>
        </div>
      )}
      <CustomersTable
        handleColumnDrag={handleColumnDrag}
        columns={changedColumns}
      />
    </div>
  );
};

export default CustomersPage;
