import Circle from './Circle';
import React from 'react';

const BSTRow = (props: any) => {

  const row: JSX.Element[] = [];

  for (let i = 0; i < props.data.length; i++) {
    console.log('i am length', props.data.length);
    if (props.data[i]) {
      row.push(<Circle val={props.data[i]} />);
    }
    else {
      row.push(<Circle val={'null'} />);
    }
  }

  return (
    <div className="BSTRow">
      {row}
    </div>
  )
}
export default BSTRow;