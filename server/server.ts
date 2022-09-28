import express from 'express';
import fileController from './fileController';

const app = express();

type ServerError = {
  log: string;
  status: number;
  message: object;
}

app.use(express.json());



app.get(
  '/api',
  fileController.getFiles,
  (req: express.Request, res: express.Response) => {
    res.setHeader('content-type', 'text/javascript');
    res.send(res.locals.files);
  }
);



app.use('/', (err: ServerError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: err.message 
  };
  const errorObj = Object.assign({}, defaultErr, err);

  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000, () => console.log('server is listening on port 3000...🚀')); 