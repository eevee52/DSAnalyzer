import * as React from 'react';
import { useState, useEffect } from 'react';
import Visualizer from './Visualizer';
import { outputArr, reset } from '../DSAnalyzer/visualize';
import { functionToRun, argsToRun }from '../DSAnalyzer/main';
// import functionToRun from '../DSAnalyzer/main';
// import argsToRun from '../DSAnalyzer/main';
import { Initializer } from './Initializer';

// nav bar

// button to select algorithm to visualize

// start to trigger rendering

// step by step for components

// declare const DSAnalyzer: any; 
const HomePage = () => {

  const [data, setData] = useState([]);
  //logic to display file names in dropdown

  //onclick (visualize button) to execute code inside dropdown

  const resetData = () => {
    reset();
    setData([]);
  };
  
  const createBoxes = () => {
    // invoke the correct algorithm with arguments
    // functionToRun(argsInFunc.importArgs);
    // console.log('this is func to run', functionToRun());
    // console.log('args to run', argsToRun);
    functionToRun(...argsToRun);
    console.log('these are the args', ...argsToRun);
    console.log('what am I: ', outputArr);
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