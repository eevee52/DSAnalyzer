import express, { Request, Response, NextFunction, RequestHandler } from 'express';
const app = express();

type ServerError = {
  log: String;
  status: Number;
  message: Object;
}



app.use(express.json());

app.use('/', (err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign({}, defaultErr, err);

  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000, () => console.log('server is listening on port 3000...🚀')); 