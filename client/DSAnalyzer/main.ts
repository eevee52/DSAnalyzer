// import functionToRun from './functionToRun';
let functionToRun: any, argsToRun: any;

// export const testing = {
//   functionToRun,
//   importFunc: (func: any) => {
//     functionToRun = func;
//     console.log(functionToRun);
//   },
//   argsToRun,
//   importArgs: (args: any) => {
//     argsToRun = args;
//     console.log(argsToRun);
//   }
// };



export const importFunc = (func: any) => {
  functionToRun = func;
  console.log(func.name);
  console.log('THIS IS FUNC', functionToRun);
};

export const importArgs = (args: any) => {
  argsToRun = args;
  console.log('THESE ARE THE ARGS', argsToRun);

};

// export default functionToRun;
export { argsToRun, functionToRun };

// export default argsInFunc;
// functionToRun?: (func: any) => {
     
// }