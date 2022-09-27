import DSAnalyzer from "DSAnalyzer"
// maybe import types here too
/* 
  import { LinkedList } from "DSAnalyzer";
  type LinkedList = {
  // this.head: null | node;
  // this.val = null;
}
*/

//  function

function LinkedList() { 
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
}



const llAdd = (LL, node) => {
  let currNode = LL.head;
  if (!currNode) {
    LL.head = node;
    LL.tail = node;
  }

  while (currNode) {
    DSAnalyzer.visualize(LL);
    if (currNode.next) {
      currNode = currNode.next;
    }
    else {
      currNode.next = node;
      LL.tail = node;
    }
  }
};

const linkedList = new LinkedList();
linkedList.head = new Node(1);
const nodetoAdd = new Node(5);
  
DSAnalyzer.functionToRun(llAdd); 
// -> exports llAdd functionality into frontend. use a callback to invoke llAdd..
// visualize method reassigns some variable to the current object..
  // push that object into an array to form JSX elements (divs)

DSAnalyzer.myArgs([linkedList, nodetoAdd]);