import React, { useState, useEffect } from 'react';
import Child from './Child';
import MOCK_DATA from '../data/MOCK_DATA.json';

function Parent() {
  const [tableData, setTableData] = useState([]);

  //   const fetchData = async () => {
  //     try {
  //       const result = await fetch('https://jsonplaceholder.typicode.com/users');
  //       const data = await result.json();
  //       setTableData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     try {
  //       const result = await fetch(MOCK_DATA);
  //       const data = await result.json();
  //       setTableData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   console.log('tableData is:', tableData);

  return <Child tableData={tableData} />;
}

export default Parent;
