import React from 'react';
import BasicTable from './BasicTable';
import Table from './Table';

function Child({ tableData }) {
  return (
    <div>
      <div>
        <BasicTable tableData={tableData} />
      </div>
    </div>
  );
}

export default Child;
