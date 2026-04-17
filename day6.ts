//complex data type
const var1: string | number ="Hello";
//union "|"
let var2: string | number = 5;
var2 ="Hello";

//1.object defination(declaration)
let user:{
    name: string;
    age: number;
    desc?: string
}={
    name:"Alice",
    age:30
}
console.log(user)


//2. using type
type ProductType = {
    id: number;
    price: number;
}
const p1: ProductType={
    id:1,
    price: 100.2
}
console.log(p1)


//3. using interface
interface UserInterface{
    name: string;
    age: number;
    isActive?: boolean;
}
const stu1: UserInterface={
    name: "Ram",
    age: 12,
    isActive: false
}
console.log(stu1)


//4. class and object
class UserClass{
    private name?: string;
    age?: number;
    constructor(name:string="Default", age: number=0){
        this.name =name;
        this.age=age;
    }
}
const u2: UserClass = new UserClass("Shyam", 25);
console.log(u2, u2.age)


//inheritance
class Employee extends UserClass{
    empId: number;
    constructor(name:string, age: number, empId: number){
        super(name, age);
        this.empId = empId;
    }
}
const emp1 : Employee=new Employee("Alice", 23,101);
console.log(emp1)

//polymorphism
const emp2: UserClass = new Employee("Bob", 20, 102)
console.log(emp2)

//abstraction
interface IShape{
    area(): number;
}
class Circle implements IShape{
    radius: number;
    constructor(radius:number){
        this.radius = radius;
    }
    area(): number{
        return Math.PI * this.radius * this.radius;
    }
}

type ComplexDataType= {
    user: Employee,
    detail: UserInterface,
    product : ProductType,
    circle: Circle
}
//task fill this data varibale with appropriate values
let data: ComplexDataType ={
    user: new Employee("Charlie", 35, 103),

    product: {id: 2, price: 200.0},

    detail:{
        name: "Sita",
        age: 33,
        isActive: true
    },

    circle:new Circle(5),
}
console.log(data)



type UDetail ={name: string}
type UInfo = {age: number}

//union and intersection
type DType = UDetail | UInfo; //union - either
let dt1: DType = {name: "Even"}
let dt2: DType = {age: 20}
console.log(dt1, dt2)

type IType = UDetail & UInfo; //intersection - both
let it1: IType = {name: "Frank", age: 45}
console.log(it1)


//Generic function - Type injection
function indentify<T>(arg: T): T{
    //T is a placeholder
    return arg;
}

const id1: number = indentify<number>(5);
const id2: string = indentify<string>("Hello");
console.log(id1, id2)


interface IApiResponse<T>{
    status: number;
    data: T;
    success: boolean;
}
type UserData = {id: number, name: string}
type ProductData = {id: number, price: number}

const response1: IApiResponse<UserData>={
    status: 200,
    data: {id:1, name: "Alice"},
    success: true
}
console.log(response1)

const response2: IApiResponse<ProductData>={
    status: 200,
    data: {id:10, price: 300.0},
    success: true
}
console.log(response1, response2)


type GeneralType = {
    id: number,
    createdAt: Date,
    title: string,
    active? : boolean
}

type PartialType = Partial<GeneralType>; //all properties optionals
type RequiredType = Required<GeneralType>;// all properties required
type ReadonlyType = Readonly<GeneralType>;
type PickType = Pick<GeneralType, "id" | "title">;// only id and title
type OmitType = Omit<GeneralType, "createdAt">;//all expect createdAt

const partialObj: PartialType = {id:1};
const pickObj: PickType ={ id: 20, title:"Unknown"}
console.log(partialObj, pickObj)

//task
const UserData:
    Partial<Omit<GeneralType, "createdAt">> | Required<Pick<GeneralType, "title" | "active">>
={
    title: "Something",
    active: true
}
console.log(UserData)

const userData2:
    Pick<GeneralType, "title" | "id"> & {type: string }& {empId: string | number}
={
    title: "Untitle",
    id: 90,
    type: "Hi",
    empId: 105
}
console.log(userData2)