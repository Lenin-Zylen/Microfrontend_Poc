import React from "react";
import DataTable from "react-data-table-component";

const TableContainer = (props) => {
  return (
    <div>
      <DataTable columns={props.columns} data={props.data} pagination />
    </div>
  );
};

export default TableContainer;
