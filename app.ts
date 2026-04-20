import express, { Application, Request, Response} from 'express';

const app: Application = express();

app.use(express.json()); //use json a request
app.use(express.urlencoded({extended: true})); //use form-urlencoded as request

const data = [
    {id: 1, name: 'Jo', age: 30},
    {id: 2, name: 'No', age: 31},
    {id: 3, name: 'Bo', age: 33},
]
//5.major api endpoints:
//1.GET all
app.get(
    "/api/persons",
    (req: Request, res: Response)=> {
        //later paginated results
        return res.status(200).json(data)
    }
);

//2. GET by id-Get one
app.get(
    "/api/persons/:id",
    (req: Request, res: Response)=>{
        const {id} = req. params; //:id
        const person = data.find(p => p.id == parseInt(id as string));
        return res.status(200).json(person);
    }
);
//3. POST-Create
app.post(
    "/api/persons",
    (req: Request, res: Response)=>{
        const {name, age}= req.body; //client request body
        const newPerson= {
            id: data.length+1,
            name,
            age
        }
        data.push(newPerson);
        return res.status(201).json(newPerson);
    }
);
//Update (get one and update)
//4.1 PUT - update whole/most resource
//4.2 PATCH - update part of resource
app.put(
    "/api/persons/:id",
    (req: Request, res: Response)=>{
        const {id} = req.params; //:id
        const {name, age} = req.body; //client request body
        const personIndex = data.findIndex(p => p.id === parseInt(id as string));

        const updatePerson = {
            name,
            age
        }
        data[personIndex] = {...data[personIndex], ...updatePerson};

        return res.status(200).json(updatePerson);
    }
);
//5. DELETE - delete one
app.delete(
    "api/perons/:id",
    (req: Request, res: Response)=>{
        const {id}= req.params; 
        const personIndex = data.findIndex(p=> p.id === parseInt(id as string));
        data.splice(personIndex,1);
        return res.status(204).json({message: "Person deleted"});
    }
);

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

const PORT: number = 8088;

app.listen(
    PORT,
    ()=>{
        console.log(`Server running: ${PORT}`);
    }
);
//execute script: npx tsx --watch app.ts
//http://localhost:8088