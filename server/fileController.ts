import express from 'express';
import fs from 'fs';
import path from 'path';

const fileController: any = {};

fileController.getFiles = (
  req: express.Request, res: express.Response, next: express.NextFunction
) => {
  let result = '';
  const algos = path.resolve(__dirname, '../algos');
  fs.readdir(algos, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach( file => {
        const data = fs.readFileSync(path.resolve(__dirname, algos, file), 'utf8');
        result = result.concat(data + '\n');
      });
      res.locals.files = result;
      return next();
    }
  });
};

export default fileController;