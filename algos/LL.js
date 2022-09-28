console.log('running ll.js')
// maybe import types here too
/* 
    import { LinkedList } from "DSAnalyzer";
    type LinkedList = {
    // this.head: null | node;
    // this.val = null;
  }
  */

function LinkedList() { 
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
}



const llAdd = (LL, ...node) => {
  console.log('args', LL, node);
  let currNode = LL.head;
  if (!currNode) {
    LL.head = node;
    LL.tail = node;
    return;
  }
  let index = 0;
  DSAnalyzer.visualize(LL); // 1

  while (index < node.length) { // 1, 5, 6 --- 100
    if (!currNode.next) {
      if (node[index]) {
        currNode.next = node[index];
        index += 1;
        LL.tail = node;
      }
    }

    currNode = currNode.next;
    DSAnalyzer.visualize(LL); // => 1, 5 - 1, 5, 6 - 1, 5, 6, 100, null
  }
};


const linkedList = new LinkedList();
linkedList.head = new Node(1);
const nodetoAdd = new Node(5);
const notetoAdd = new Node(6);
const dada = new Node(9);
DSAnalyzer.importFunc(llAdd);
// -> exports llAdd functionality into frontend. use a callback to invoke llAdd..
// visualize method reassigns some variable to the current object..
// push that object into an array to form JSX elements (divs)

DSAnalyzer.importArgs({ linkedList, nodetoAdd, notetoAdd, dada });