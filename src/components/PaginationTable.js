import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import MOCK_DATA from '../data/MOCK_DATA.json';
import { COLUMNS, COLUMNS_ALT, GROUPED_COLUMNS } from './columns';
// import './table.css';
import './table2.css';

function PaginationTable({ tableData }) {
  const columns = useMemo(() => COLUMNS, []);
  // const columnsAlt = useMemo(() => COLUMNS_ALT, []);
  // const groupedColumns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      // columns: columnsAlt,
      // columns: groupedColumns,
      data,
    },
    usePagination
  );

  const { pageIndex } = state;

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
          {page.map((row) => {
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
      <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationTable;
