import Circle from './Circle';
import React from 'react';

const BSTRow = (props: any) => {

  const row: JSX.Element[] = [];

  for (let i = 0; i < props.data.length; i++) {
    row.push(<Circle val={props.data[i]} />);
  }

  return (
    <div className="BSTRow">
      {row}
    </div>
  )
}
export default BSTRow;