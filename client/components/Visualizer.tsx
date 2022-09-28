import React from 'react';
import { useState, useEffect } from 'react';
import Box from './Box';
import Row from './Row';

const visualizer = (props: any) => {
  const tempBox = [];
  for (let i = 0; i < props.data.length; i++) {
    tempBox.push(<Row data={props.data[i]} />);
  }


  /*
          5
        3   8
      2  4    9
  */
  // const bfs = (props) => {
  //   if (props.data.tree) {

  //   }
  // }

  return (
    <div className="box-container">
      {tempBox}
    </div>
  );
};

export default visualizer;