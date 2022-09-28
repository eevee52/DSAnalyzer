class LinkedList {
  head: null | Node;
  tail: null | Node;
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class Node {
  val: number;
  next: null | Node;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}



//output array for frontend
const outputArr: any = [[1, 2, 3, 4]];


const visualize = (LL: LinkedList) => {
  // empty outputArr
  // outputArr = [];
  const list: (string | number)[] = [];
  // currNode is equal to head node
  let currNode = LL.head;

  //
  let firstNull = true;

  // while currNode is not null
  while (currNode || firstNull) {
    console.log(currNode);
    // push value into output arr
    if (!currNode) {
      // outputArr.push('null');
      list.push('null')
    }
    else list.push(currNode.val);

    // so we ensure one null gets pushed into outputArr
    if (!currNode) firstNull = false;

    // set currNode equal to next node
    if (currNode) currNode = currNode.next;
    else break;
  }
  outputArr.push(list);
};

const llAdd = (LL: LinkedList, node: Node) => {
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
      visualize(LL); // => [1,2,3,4] => [1,2,3,4,5, 'null']
      LL.tail = node;
      break;
    }
  }
};

const test = new LinkedList();
const nodeList = new Node(1);
nodeList.next = new Node(2);
nodeList.next.next = new Node(3);
nodeList.next.next.next = new Node(4);
test.head = nodeList;
const testNode = new Node(5);
llAdd(test, testNode);
console.log(outputArr)  // [1,2,3,4] -> [1,2,3,4,5, 'null']
console.log(test);
export default visualize;
export { outputArr };