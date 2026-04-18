import express, { Application, Request, Response} from 'express';

const app: Application = express();

app.get(
    '/hello',//declaring the path
    (req: Request, res: Response) => {
        return res.send('Hello World');
    }
);


app.get(
    '/hello/:name',//declaring the path
    (req: Request, res: Response) => {
        //const name = req.params.name
        const {name} = req.params; //:name
        const {title} = req.query; // ?title=Dr.
        return res.send(`Hello, ${title} ${name}!`);
    }
);


//task
app.get(
    '/hello/:name/:age',//declaring the path
    (req: Request, res: Response) => {
        //const name = req.params.name
        const {name, age} = req.params; //:name, :age
        const { title, category } = req.query; //title=Dr.&category=doctor
        //return "Hello Dr. John, you are 30 years old and your category is doctor"
        return res.send(`Hello ${title} ${name}, you are ${age} years old and your category is ${category}`);
    }
);

const PORT: number = 8080;

app.listen(
    PORT,
    ()=>{
        console.log(`Server running: ${PORT}`);
    }
);
//execute script: npx tsx --watch app.ts
//http://localhost:8088