//output array for frontend
let outputArr: any = [];

const reset = () => {
  outputArr = [];
};

const visualize = (LL: any) => {
  console.log('THIS IS ARG', LL);
  console.log('running visualize');
  // empty outputArr
  // outputArr = [];
  const list: (string | number)[] = [];
  // currNode is equal to head node
  let currNode = LL.head;

  let firstNull = true;
  let counter = 0;
  // while currNode is not null
  while (currNode || firstNull) {
    console.log('in visualize while loop');
    // push value into output arr
    if (!currNode) {
      // outputArr.push('null');
      list.push('null');
    }
    else list.push(currNode.val);

    // so we ensure one null gets pushed into outputArr
    if (!currNode) firstNull = false;
    // set currNode equal to next node
    
    currNode = currNode.next;
    // else if (currNode) currNode = currNode.next;
    // else break;
    counter +=1;
    if (counter > 200) break;
  }
  outputArr.push(list);
};

export { outputArr, visualize, reset };