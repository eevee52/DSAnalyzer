// import functionToRun from './functionToRun';
let functionToRun;

export default {
  functionToRun,
  importFunc: (func: any) => {
    functionToRun = func;
    console.log(functionToRun);
  },

  importArgs: (args: any) => {
    console.log(args);
  }
};