import React from "react";
import DataTable from "react-data-table-component";

const TableContainer = (props) => {
  return (
    <>
      <DataTable columns={props.columns} data={props.data} pagination />
    </>
  );
};

export default TableContainer;