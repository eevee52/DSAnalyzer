import * as React from 'react';
import { useState, useEffect } from 'react';
import Visualizer from './Visualizer';
import { output, reset } from '../DSAnalyzer/visualize';
import { functionsToRun, argsToRun } from '../DSAnalyzer/main';
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
  
  const functionNames = [];
  for (const key in functionsToRun){
    functionNames.push(<option value={key}>{key}()</option>)
  }

  const argNames = [];
  for (const key in argsToRun){
    // console.log(Object.getPrototypeOf(argsToRun.nodetoAdd).constructor.name)
    argNames.push(<option value={key}>{key}</option>)
  }

  // change this const if we get around to making # args dynamic based on fn
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

  const updateArgs = (e: any) => {
    e.preventDefault();
    const selected = e.target.value
    console.log(selected)
  }


  const createBoxes = (e: any) => {
    e.preventDefault();
    const targetForm = e.target.form
    const funcName = e.target.form['algo-selector'].value
    const args: Array<any> = [];

    argSelectorIds.forEach((e,i) => {
      const selectorId = 'arg-selector-' + (i+1)
      if (targetForm[selectorId].value !== "") {
        args.push(argsToRun[targetForm[selectorId].value])
      }
    })
    console.log('func',functionsToRun[funcName]);
    console.log('args',args)
    functionsToRun[funcName](...args);
    // console.log('these are the args', argsToRun);
    // console.log('what am I: ', outputArr);
    setData(output);
  };

  return (
    <div id='homepage'>
      <div id='button-container'>
        <Initializer />
        <form id="algo-selector">
          <select id="algo-selector" required onChange={(e) => { updateArgs(e) }}>
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
