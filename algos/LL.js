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



const llAdd = (LL, node) => {
  console.log('args', LL, node);
  let currNode = LL.head;
  if (!currNode) {
    LL.head = node;
    LL.tail = node;
  }
  // LL = {1,2,3,4,5}

  while (currNode) {
    if (currNode.next) {
      currNode = currNode.next;
    }
    else {
      currNode.next = node;
      LL.tail = node;
      DSAnalyzer.visualize(LL); // => [1,2,3,4,5] => [1,2,3,4,5,6]
      break;
    }
  }
};


const linkedList = new LinkedList();
linkedList.head = new Node(1);
const nodetoAdd = new Node(5);
  
DSAnalyzer.importFunc(llAdd);
// -> exports llAdd functionality into frontend. use a callback to invoke llAdd..
// visualize method reassigns some variable to the current object..
// push that object into an array to form JSX elements (divs)

DSAnalyzer.importArgs([linkedList, nodetoAdd]);