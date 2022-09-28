function BinarySearchTree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const tree = new BinarySearchTree(10);
tree.left = new BinarySearchTree(5);
tree.right = new BinarySearchTree(14);
tree.right.left = new BinarySearchTree(12);
tree.left.right = new BinarySearchTree(7);
tree.left.right.right = new BinarySearchTree(8);

const bstSum = (root) => {
  let sum = 0;
  const queue = [root];

  while (queue.length > 0) {
    DSAnalyzer.visualize(root);
    const node = queue.shift();
    if (node.val) {
      sum += node.val;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

};

DSAnalyzer.importArgs({tree});
DSAnalyzer.importFunc(bstSum);