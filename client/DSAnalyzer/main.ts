type UserFunctions = {
  [name: string]: any,
}

type UserArgs = {
  [name: string]: any,
}

const functionsToRun: UserFunctions = { }
const argsToRun: UserArgs = { }

export const importFunc = (func: any) => {
  functionsToRun[func.name] = func;
  // console.log(functionsToRun);
};

export const importArgs = (args: any) => {
  // console.log(typeof args.linkedList)
  for (const i in args){
    argsToRun[i] = args[i]
  }
  // console.log(argsToRun);

};

export { argsToRun, functionsToRun }

