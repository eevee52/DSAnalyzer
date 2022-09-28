import React from 'react';
import Box from './Box';

const Row = (props: any) => {
  const row = [];
  for (let i = 0; i < props.data.length; i++) {
    row.push(<Box data={props.data[i]} />);
  }

  return (
    <div className="row">{row}</div>
  );
};

export default Row;