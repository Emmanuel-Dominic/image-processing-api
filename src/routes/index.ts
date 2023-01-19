import express, { Router } from 'express';
import path from 'path';
import controllers from './../controllers';

const dir = path.join(__dirname, 'public');
const imageRouter = Router();

imageRouter.use(express.static(dir));

imageRouter.get('/', controllers.get);
imageRouter.get('/images', controllers.get_or_create);

export default imageRouter;
