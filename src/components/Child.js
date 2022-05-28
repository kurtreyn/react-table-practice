import React from 'react';
import BasicTable from './BasicTable';
import SortingTable from './SortingTable';
import Table from './Table';
import FilteringTable from './FilteringTable';
import PaginationTable from './PaginationTable';
import RowSelection from './RowSelection';

function Child({ tableData }) {
  return (
    <div>
      <div>
        {/* <BasicTable tableData={tableData} /> */}
        {/* <SortingTable tableData={tableData} /> */}
        {/* <FilteringTable tableData={tableData} /> */}
        {/* <PaginationTable tableData={tableData} /> */}
        <RowSelection tableData={tableData} />
      </div>
    </div>
  );
}

export default Child;
