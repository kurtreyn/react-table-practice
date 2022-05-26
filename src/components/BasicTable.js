import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from '../data/MOCK_DATA.json'; // Step 1
import { COLUMNS } from './columns';

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

  return <div>BasicTable</div>;
}

export default BasicTable;
