import * as React from 'react';
import { useState, useEffect } from 'react';
import Visualizer from './Visualizer';
import { outputArr } from '../DSAnalyzer/visualize';
import { Initializer } from './Initializer';

// nav bar

// button to select algorithm to visualize

// start to trigger rendering

// step by step for components


const HomePage = () => {

  const [data, setData] = useState([]);
  //logic to display file names in dropdown

  //onclick (visualize button) to execute code inside dropdown

  const createBoxes = () => {
    setData(outputArr);
  };

  return (
    <div id='homepage'>
      <div id='button-container'>
      <Initializer />
        <select id="algo-selector">
          <option>Testing1</option>
          <option>Testing2</option>
        </select>
        <button onClick={() => { createBoxes(); }}> Visualize</button>
      </div>
      <div id="visualization">
        <Visualizer data={data} />
      </div>
    </div>

  );
};

export { HomePage };