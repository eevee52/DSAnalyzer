import * as React from 'react';
import { useState, useEffect } from 'react';
import Visualizer from './Visualizer';
import { output, reset, tester } from '../DSAnalyzer/visualize';
import { functionToRun, argsToRun } from '../DSAnalyzer/main';
// import functionToRun from '../DSAnalyzer/main';
// import argsToRun from '../DSAnalyzer/main';
import { Initializer } from './Initializer';

// nav bar

// button to select algorithm to visualize

// start to trigger rendering

// step by step for components

// declare const DSAnalyzer: any; 
const HomePage = () => {

  const [data, setData] = useState({});
  //logic to display file names in dropdown

  //onclick (visualize button) to execute code inside dropdown

  const resetData = () => {
    reset();
    location.reload();
    setData({});
  };

  const createBoxes = () => {
    // invoke the correct algorithm with arguments
    // functionToRun(...argsToRun);
    tester();

    setData(output);
  };

  return (
    <div id='homepage'>
      <div id='button-container'>
        <Initializer />
        <select id="algo-selector">
          <option>Testing1</option>
          <option>Testing2</option>
        </select>
        <button onClick={() => { createBoxes() }}> Visualize</button>
        <button onClick={() => resetData()}>Reset</button>
      </div>
      <div id="visualization">
        <Visualizer data={data} />
      </div>
    </div>

  );
};

export { HomePage };