import React from 'react';
import './table.css';

function Table(props) {
  const { tableData } = props;
  const { column } = props;
  console.log('tableData on Table is:', tableData);
  console.log('column', column);
  return (
    <div className="table-component">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Table;
