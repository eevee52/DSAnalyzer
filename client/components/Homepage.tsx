import * as React from 'react';
import { useState, useEffect } from 'react';
import Visualizer from './Visualizer';
import { outputArr, reset } from '../DSAnalyzer/visualize';
import { functionsToRun, argsToRun }from '../DSAnalyzer/main';
import { Initializer } from './Initializer';

// nav bar

// button to select algorithm to visualize

// start to trigger rendering

// step by step for components

// declare const DSAnalyzer: any; 
const HomePage = () => {

  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState([]);

  const resetData = () => {
    reset();
    setData([]);
  };
  
  const functionNames = [];
  for (const key in functionsToRun){
    functionNames.push(<option>{key}</option>)
    // console.log(functionsToRun)
    // console.log(Object.getPrototypeOf(functionsToRun.llAdd).name)
  }

  const argNames = [];
  for (const key in argsToRun){
    // console.log(Object.getPrototypeOf(argsToRun.nodetoAdd).constructor.name)
    argNames.push(<option value={key}>{key}</option>)
  }

  const numParams = 3;
  const argSelectorIds: Array<any> = [];

  for (let i = 1; i <= numParams; i++){
    argSelectorIds.push("arg-selector-" + i)
  }

  const argSelectors = [];
  for (let i = 0; i < argSelectorIds.length; i++){
    argSelectors.push(
      <select id={argSelectorIds[i]}>
        <option value="" selected disabled hidden>choose arg {i + 1}</option>
        {argNames}
      </select>
    )
  }



  const createBoxes = (e: any) => {
    e.preventDefault();
    const targetForm = e.target.form
    const funcName = e.target.form['algo-selector'].value
    const args: Array<any> = [];
    argSelectorIds.forEach((e,i) => {
      const selectorId = 'arg-selector-' + (i+1)
      if (targetForm[selectorId].value !== "") {
        // console.log(targetForm[selectorId].value = "")
        args.push(argsToRun[targetForm[selectorId].value])
      }
    })
    console.log('the args',args)
    functionsToRun[funcName](...args);
    // console.log('these are the args', argsToRun);
    // console.log('what am I: ', outputArr);
    setData(outputArr);
  };

  return (
    <div id='homepage'>
      <div id='button-container'>
        <Initializer />
        <form id="algo-selector">
          <select id="algo-selector" required>
<option value="" selected disabled hidden>choose function</option>
            {functionNames}
          </select>
          {argSelectors}
          <button onClick={(e) => { createBoxes(e) }}> Visualize</button>
        </form>
        <button onClick={() => resetData()}>Reset</button>
      </div>
      <div id="visualization">
        <Visualizer data={data} />
      </div>
    </div>

  );
};

export { HomePage };
