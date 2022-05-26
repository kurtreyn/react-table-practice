import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from '../data/MOCK_DATA.json'; // Step 1
import { COLUMNS } from './columns';
import './table.css';

function BasicTable({ tableData }) {
  // useMemo is a React hook that is similar to useEffect, but it only calls the function if one of the dependencies has changed.
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  // Step 3: create a table insance
  // useTable returns a bunch of values that we can use to control the table.
  const tableInstance = useTable({
    columns,
    data,
  });

  // Step 5
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  // getTableProps: destructure values that react table needs
  // getTableBodyProps: destructure values that react table needs
  // headerGroups: group of headers, every column header belongs to it's own header group
  // on each row, prepareRow is called, which is a function that is passed to the table body

  // Steps 3 & 5 can be combined to look like this:
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({
  //     columns,
  //     data,
  //   });

  return (
    // Step 4
    <div className="table-component">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BasicTable;
