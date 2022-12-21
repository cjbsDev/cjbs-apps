import React from 'react';
import DataTable, {TableProps} from 'react-data-table-component';
import {dataTableCustomStyles} from '@styles/common/dataTableCustomStyle';


function DataTableBase<T>(props: TableProps<T>){
  return (
    <DataTable
      pagination
      paginationPerPage={15}
      customStyles={dataTableCustomStyles}
      {...props}
    />
  );
}

export default DataTableBase;
