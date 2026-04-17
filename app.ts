import express, { Application, Request, Response} from 'express';

const app: Application = express();

app.get(
    '/',//declaring the path
    (req: Request, res: Response) => {
        return res.send('Hello World');
    }
);
const PORT: number = 8088;

app.listen(
    PORT,
    ()=>{
        console.log(`Server running: ${PORT}`);
    }
);
//execute script: npx tsx --watch app.ts