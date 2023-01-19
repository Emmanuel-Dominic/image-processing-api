import { NextFunction, Request, Response } from 'express';
import path from 'path';
import resizeImage from './../utilities/index';

export default {
    get: (req: Request, res: Response, next: NextFunction) => res.send('Welcome to the Image home page'),
    get_or_create: (req: Request, res: Response, next: NextFunction) => {
        const queryParam = req.query;
        const imageDir = path.resolve(__dirname, './../../public/images/');

        return resizeImage(
            String(queryParam.filename),
            Number(queryParam.height ?? 200),
            Number(queryParam.width ?? 200),
            imageDir,
            req,
            res
        );
    },
};
