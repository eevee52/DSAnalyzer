//output array for frontend
// let outputArr: any = [];

const reset = () => {
  // outputArr = [];
  output.outputArr = [];
};

const output: { outputArr: Array<(string | number)[]>; BST: any } = {
  outputArr: [],
  BST: ''
};

// const visualize = (LL: any) => {
//   console.log('THIS IS ARG', LL);
//   console.log('running visualize');
//   // empty outputArr
//   // outputArr = [];
//   const list: (string | number)[] = [];
//   // currNode is equal to head node
//   let currNode = LL.head;

//   let firstNull = true;
//   let counter = 0;
//   // while currNode is not null
//   while (currNode || firstNull) {
//     console.log('in visualize while loop');
//     // push value into output arr
//     if (!currNode) {
//       // outputArr.push('null');
//       list.push('null');
//     }
//     else list.push(currNode.val);

//     // so we ensure one null gets pushed into outputArr
//     if (!currNode) firstNull = false;
//     // set currNode equal to next node

//     else currNode = currNode.next;
//     // else if (currNode) currNode = currNode.next;
//     // else break;
//     counter += 1;
//     if (counter > 200) break;
//   }
//   output.outputArr.push(list);
// };




// BST VISUALIZER TEST

const visualize = (root: any) => {
  output.BST = root;
};


class BinarySearchTree {
  val: number;
  left: BinarySearchTree | null;
  right: BinarySearchTree | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinarySearchTree(10);
tree.left = new BinarySearchTree(5);
tree.right = new BinarySearchTree(14);
tree.right.left = new BinarySearchTree(12);
tree.left.right = new BinarySearchTree(7);
tree.left.right.right = new BinarySearchTree(8);

const tester = () => {
  const bstSum = (root: any) => {
    let sum = 0;
    const queue = [root];

    while (queue.length > 0) {
      visualize(root);
      const node = queue.shift();
      if (node.val) {
        sum += node.val;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    console.log('i am sum', sum);
  };
  bstSum(tree);
};

export { output, visualize, reset, tester };