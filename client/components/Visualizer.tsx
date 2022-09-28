import React from 'react';
import Row from './Row';
import BSTRow from './BSTRow';

const visualizer = (props: any) => {
  const tempBox: JSX.Element[] = [];
  const bstNodes: any = [];
  let tempVals: any = [];
  const LL = () => {
    for (let i = 0; i < props.data.outputArr.length; i++) {
      tempBox.push(<Row data={props.data.outputArr[i]} />);
    }
  };

  // bstNodes = [ [rootNode], [1Left, 1Right], [2LL, 2LR, 2RL, 2RR] ]
  const addNode = (node: any) => {
    tempVals.push(node.val);
  };


  const BFS = (root: any) => {
    const bstHeight: any = (tree: any) => {
      if (tree.left === null && tree.right === null) {
        return 0;
      }
      if (tree.left === null) {
        return bstHeight(tree.right) + 1;
      }
      if (tree.right === null) {
        return bstHeight(tree.left) + 1;
      }
      const leftHeight: any = bstHeight(tree.left);
      const rightHeight: any = bstHeight(tree.right);
      return Math.max(leftHeight, rightHeight) + 1;
    };

    const maxNodes = Math.pow(2, bstHeight(root));
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

      if (counter >= maxBranches) {
        counter = 0;
        maxBranches *= 2;
        bstNodes.push(<BSTRow data={tempVals} />);
        tempVals = [];
      }
      if (counter > maxNodes) break;
    }
  };

  // const BFS = (root: any) => {
  //   const queue = [root];
  //   let counter = 0;
  //   let maxBranches = 2;
  //   while (queue.length > 0) {
  //     const node = queue.shift();

  //     if (node === 'null') {
  //       counter += 2;
  //       tempVals.push(node);
  //     }

  //     if (node) {
  //       tempVals.push(node.val);
  //     }

  //     if (node.left) {
  //       counter += 1;
  //       queue.push(node.left);
  //     }
  //     if (node.right) {
  //       queue.push(node.right);
  //       counter += 1;
  //     }
  //     if (node && !node.left) {
  //       counter += 1;
  //       // tempVals.push('null');
  //       queue.push('null');
  //     }
  //     if (node && !node.right) {
  //       counter += 1;
  //       // tempVals.push('null');
  //       queue.push('null');
  //     }

  //     console.log('this is counter', counter);
  //     console.log('this is maxbranch', maxBranches);
  //     if (counter >= maxBranches) {
  //       counter = 0;
  //       maxBranches *= 2;
  //       bstNodes.push(<BSTRow data={tempVals} />);
  //       tempVals = [];
  //     }
  //     if (counter > 10) break;
  //   }
  // };
  console.log('THIS IS PROPS DATA', props);
  if (props.data.outputArr !== undefined) LL();

  else if (props.data.BST) BFS(props.data.BST);

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