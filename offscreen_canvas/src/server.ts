import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3000;

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello World!');
// });

// Server static assets
app.use(express.static("build", {
    etag: true,
    maxAge: 0
}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
