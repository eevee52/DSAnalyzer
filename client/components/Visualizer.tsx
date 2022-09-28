import React from 'react';
import { useState, useEffect } from 'react';
import Row from './Row';
import BSTRow from './BSTRow';



const visualizer = (props: any) => {
  const tempBox: JSX.Element[] = [];
  const bstNodes: any = [];
  let tempVals: any = [];
  const LL = () => {
    for (let i = 0; i < props.data.length; i++) {
      tempBox.push(<Row data={props.data[i]} />);
    }
  };

  // bstNodes = [ [rootNode], [1Left, 1Right], [2LL, 2LR, 2RL, 2RR] ]
  const addNode = (node: any) => {
    tempVals.push(node.val);
  };


  /*
            10 -- left 5 | right 14
          5   14
        3   6       
  */
  const BFS = (root: any) => {

    const queue = [root];
    let counter = 0;
    let maxBranches = 2;
    while (queue.length > 0) {
      const node = queue.shift();

      if (node === 'null') {
        counter += 2;
        tempVals.push(node);
      }

      if (node) {
        tempVals.push(node.val);
      }

      if (node.left) {
        counter += 1;
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
        counter += 1;
      }
      if (node && !node.left) {
        counter += 1;
        // tempVals.push('null');
        queue.push('null');
      }
      if (node && !node.right) {
        counter += 1;
        // tempVals.push('null');
        queue.push('null');
      }

      console.log('this is counter', counter);
      console.log('this is maxbranch', maxBranches);
      if (counter >= maxBranches) {
        counter = 0;
        maxBranches *= 2;
        bstNodes.push(<BSTRow data={tempVals} />);
        tempVals = [];
      }
      if (counter > 10) break;
    }
  };

  console.log('THIS PROPS ON 75', props.data.BST);
  if (props.data.outputArr !== undefined) LL();
  if (props.data.BST !== undefined) BFS(props.data.BST);

  return (
    <div className="box-container">
      {tempBox !== null &&
        tempBox}
      {bstNodes !== null &&
        bstNodes}
    </div>
  );
};

export default visualizer;