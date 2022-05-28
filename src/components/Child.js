import React from 'react';
import BasicTable from './BasicTable';
import SortingTable from './SortingTable';
import Table from './Table';
import FilteringTable from './FilteringTable';
import PaginationTable from './PaginationTable';
import RowSelection from './RowSelection';
import ColumnOrder from './ColumnOrder';
import ColumnHiding from './ColumnHiding';
import StickyColumns from './StickyColumns';

function Child({ tableData }) {
  return (
    <div>
      <div>
        {/* <BasicTable tableData={tableData} /> */}
        {/* <SortingTable tableData={tableData} /> */}
        {/* <FilteringTable tableData={tableData} /> */}
        {/* <PaginationTable tableData={tableData} /> */}
        {/* <RowSelection tableData={tableData} /> */}
        {/* <ColumnOrder tableData={tableData} /> */}
        {/* <ColumnHiding tableData={tableData} /> */}
        <StickyColumns tableData={tableData} />
      </div>
    </div>
  );
}

export default Child;
