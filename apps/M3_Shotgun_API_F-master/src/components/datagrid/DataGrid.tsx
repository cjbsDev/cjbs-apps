import React from 'react';
import DataTable, {TableStyles, TableProps} from 'react-data-table-component';
import {dataTableCustomStyles} from '@styles/common/dataTableCustomStyle';

interface DataTableGridProps {
  customStyles?: TableStyles;
}

const DataGrid = (props: TableProps<DataTableGridProps>) => {
  return (
    <div>
      <DataTable
        pagination
        customStyles={dataTableCustomStyles}
        {...props}
      />
    </div>
  );
};

export default DataGrid;
