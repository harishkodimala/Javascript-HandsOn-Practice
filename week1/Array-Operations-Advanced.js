/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    
Use filter() to get only inStock products
Use map() to create a new array with:  { name, totalPrice }
Use reduce() to calculate grand total cart value
Use find() to get details of "Mouse"
Use findIndex() to find the position of "Keyboard"

*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//filter 
let result=cart.filter(cartobj=>cartobj.inStock==true)
console.log(result)

//map
let result1=cart.map(cartobj=>[{name:cartobj.name,totalPrice:cartobj.price*cartobj.quantity}])
console.log(result1)

//reduce
let result2=cart.reduce((acc,elementObj)=>acc+elementObj.price*elementObj.quantity,0)
console.log(result2)

//find
let result3=cart.find(element=>element.name=='Mouse')
console.log(result3)

//findIndex
let result4=cart.findIndex(element=>element.name==="Keyboard")
console.log(result4)



/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    
filter() students who passed (marks ≥ 40)
map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D

   
reduce() to calculate average marks
find() the student who scored 92
findIndex() of student "Kiran"

*/


const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter
let res=students.filter(studentObj=>studentObj.marks>=40)
console.log(res)

//map
let res1=students.map(studentObj=>{grade:studentObj.marks>=90?'A':studentObj.marks>=75?'B':studentObj.marks>=60?'C':'D'})
console.log(res1)

//reduce
let res2=students.reduce((acc,elementObj)=>acc+elementObj.marks,0)/students.length
console.log(res2)

//find
let res3=students.find(element=>element.marks===92)
console.log(res3)

//findIndex
let res4=students.findIndex(element=>element.name==="Kiran")
console.log(res4)


/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"

*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//filter
let resemp=employees.filter(employeeObj=>employeeObj.department==="IT")
console.log(resemp)

//map
let resemp11=employees.map(employeeObj=>{employeeObj.netSalary=employeeObj.salary+employeeObj.salary*0.1; return employeeObj})
console.log(resemp11)

//reduce
let resemp2=employees.reduce((acc,elementObj)=>acc+elementObj.salary,0)
console.log(resemp2)

//find
let resemp3=employees.find(element=>element.salary===30000)
console.log(resemp3)

//findIndex
let resemp4=employees.findIndex(element=>element.name==="Neha")
console.log(resemp4)



/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];  

//filter
let resmov=movies.filter(movieObj=>movieObj.genre==="Sci-Fi")
console.log(resmov)

//map
let resmov1=movies.map(movieObj=>`${movieObj.title} (${movieObj.rating})`)
console.log(resmov1)

//reduce
let resmov2=movies.reduce((acc,elementObj)=>acc+elementObj.rating,0)/movies.length
console.log(resmov2)

//find
let resmov3=movies.find(element=>element.title==="Joker")
console.log(resmov3)

//findIndex
let resmov4=movies.findIndex(element=>element.title==="Avengers")
console.log(resmov4)



/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000

    */

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//filter
let restranc=transactions.filter(transactionObj=>transactionObj.type==="credit")
console.log(restranc)

//map
let restrac1=transactions.map(transactionObj=>transactionObj.amount)
console.log(restrac1)    

//reduce
let restrac2=transactions.reduce((acc,elementObj)=>{
    if(elementObj.type==="credit")
    {
        return acc+elementObj.amount
    }       
    else
    {
        return acc-elementObj.amount
    }
},0)
console.log(restrac2)   

//find
let restrac3=transactions.find(element=>element.type==="debit")
console.log(restrac3)   

//findIndex
let restrac4=transactions.findIndex(element=>element.amount===10000)
console.log(restrac4)