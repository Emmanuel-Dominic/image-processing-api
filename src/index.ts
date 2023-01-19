import express, { Response, Request, NextFunction, Application, ErrorRequestHandler } from 'express';
import createHttpError from 'http-errors';
import imageRouter from './routes/index';
import { Error } from './services/index';

const app: Application = express();
const PORT = 3000;

app.use('/images', express.static(process.cwd() + '/public/images'));

app.use('/api/', imageRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status ?? 500);
    res.send({
        status: err.status ?? 500,
        message: err.message,
    });
};

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
