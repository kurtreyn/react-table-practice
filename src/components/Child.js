import React from 'react';
import BasicTable from './BasicTable';
import SortingTable from './SortingTable';
import Table from './Table';

function Child({ tableData }) {
  return (
    <div>
      <div>
        {/* <BasicTable tableData={tableData} /> */}
        <SortingTable tableData={tableData} />
      </div>
    </div>
  );
}

export default Child;
