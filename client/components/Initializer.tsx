// import functionToRun  from '../DSAnalyzer/functionToRun';
import { useState, useEffect } from 'react';
import * as React from 'react';

const Initializer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      // console.log('right before fetch');
      // const response = await fetch('/api');
      // const json = await response.json();
      // setData(json);
      // const body = document.getElementById('app');
      // const scr = document.createElement('script');
      
      // // json[0]();
    };
    fetchData();
  }, []);
  return (
    <div>
    </div>
  );
};




export { Initializer };