import { useState, useEffect } from 'react';


const visualizer = () => {

  const [data, setData] = useState([]);
  // data = [{},{}.{}]
  const visualize = (importedData: any) => {
    //do some stuff to importedData
    useEffect(() => {
      setData([...importedData]);
    });
  };

  return (
    console.log('hello')
  );
};

export default visualizer;