# React Table Practice

- Step 1:
  - Obtain the data from the API
- Step 2
  - Create a columns array of objects
  - Each column is represented by an object in the array
- Step 3
  - Create a table instance
- Step 4
  - Define the table structure using HTML
- Step 5
  - Use the table instance with JSX to render all necessary UI

Basic Table structure

```
  return (
    // Step 4
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
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>


    </table>
  );
```
