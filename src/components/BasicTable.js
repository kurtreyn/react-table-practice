import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from '../data/MOCK_DATA.json';
import { COLUMNS, COLUMNS_ALT, GROUPED_COLUMNS } from './columns';
// import './table.css';
import './table2.css';

function BasicTable({ tableData }) {
  const columns = useMemo(() => COLUMNS, []);
  // const columnsAlt = useMemo(() => COLUMNS_ALT, []);
  // const groupedColumns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    // columns: columnsAlt,
    // columns: groupedColumns,
    data,
  });

  return (
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
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default BasicTable;
