import fs from 'fs';
import sharp from 'sharp';
import { Request, Response } from 'express';

const readImage = (file: string, req: Request, res: Response): any => {
    fs.readFile(file, (err, data) => {
        if (err != null) throw err;
        res.status(200);
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        return res.end(data);
    });
};

const resizeImage = (
    filename: string,
    height: number,
    width: number,
    dir: string,
    req: Request,
    res: Response
): any => {
    if (!fs.existsSync(`${dir}/${filename}.jpg`)) {
        return res.send("Image File don't Exist!");
    } else if (fs.existsSync(`${dir}/${filename}-${width}x${height}.jpg`)) {
        readImage(`${dir}/${filename}-${width}x${height}.jpg`, req, res);
    } else {
        sharp(`${dir}/${filename}.jpg`)
            .resize({ width, height })
            .toFile(`${dir}/${filename}-${width}x${height}.jpg`)
            .then((newFileInfo: any) => {
                readImage(`${dir}/${filename}-${width}x${height}.jpg`, req, res);
            })
            .catch((err: any) => {
                console.log(err);
                return 'Image resizing Failed!';
            });
    }
};

export default resizeImage;
