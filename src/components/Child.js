import React from 'react';
import BasicTable from './BasicTable';
import SortingTable from './SortingTable';
import Table from './Table';
import FilteringTable from './FilteringTable';

function Child({ tableData }) {
  return (
    <div>
      <div>
        {/* <BasicTable tableData={tableData} /> */}
        {/* <SortingTable tableData={tableData} /> */}
        <FilteringTable tableData={tableData} />
      </div>
    </div>
  );
}

export default Child;
