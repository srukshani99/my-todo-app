import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routerHandler from './routes';

const PORT = 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/', routerHandler);

app.get('/', (req: Request, res: Response) => {
    res.send('my-todo-service backend GET');
})

app.listen(PORT, () => {
    console.log(`Server started running on PORT ${PORT}`);
})