import express, { Express, Request, Response } from 'express';
import fs from 'fs';
import sharp from 'sharp';
import multer from 'multer';

const upload = multer({dest : '/../statics/images'})
const app: Express = express();
const PORT: number = 3000;

app.use('/images', express.static(process.cwd() + '/statics/images'))

app.get('/api/images', upload.single("avatar"), (req: Request, res: Response) => {
    const queryParam = req.query;
    const imageDir = __dirname + `/../statics/images/`;

    sharp(imageDir + `${queryParam.filename}.jpg`)
        .resize({ width: Number(queryParam.width), height: Number(queryParam.height) }).toFile(`${imageDir}new-${queryParam.filename}.jpg`)
        .then((newFileInfo: any) => {
            fs.readFile(`${imageDir + 'new-' + queryParam.filename}.jpg`, (err, data) => {
                if (err) throw err;
                res.status(200);
                res.writeHead(200, {'Content-Type': 'image/jpg'});
                res.end(data);
            });
        })
        .catch((err: any) => {
            res.send('Image resizing Failed or Image don\'t Exist')
    });
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

export default app;
