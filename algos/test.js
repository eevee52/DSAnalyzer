const testFunc = (a,b,c) => {
  console.log('hellotestfunc',a,b,c);
};

const someNum = 9
const someStr = 'strvar'

DSAnalyzer.importArgs({someNum, someStr})
DSAnalyzer.importFunc(testFunc);
