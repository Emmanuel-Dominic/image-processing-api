import express, { Express, Request, Response } from 'express';
import fs from 'fs';

const app: Express = express();
const PORT: number = 3000;

app.use('/images', express.static(process.cwd() + '/statics/images'))

app.get('/:name', (req: Request, res: Response) => {
    const name = req.params.name;
    fs.readFile(__dirname + `/../statics/images/${name}`, function(err, data) {
        if (err) throw err;
        res.status(200);
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.end(data);
    });
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

export default app;
