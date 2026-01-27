/*
Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/

//test data
let temperatures = [32, 35, 28, 40, 38, 30, 42];

//filter
let result1=temperatures.filter(temp=>temp>35)
console.log(result1)

//map
let result2=temperatures.map(element=>(element*9/5)+32)
console.log(result2)

//reduce
let avg=temperatures.reduce((acc,element)=>acc+element)
console.log(avg/temperatures.length)

//find
let result3=temperatures.find(element=>element>40)
console.log(result3)

//findIndex
let result4=temperatures.findIndex(element=>element===28)
console.log(result4)



/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/

//test data
const courses = ["javascript", "react", "node", "mongodb", "express"];

//filter
let res=courses.filter(element=>element.length>5)
console.log(res)

//map
let res1=courses.map(element=>element.toUpperCase())
console.log(res1)

//reduce
let res2=courses.reduce((acc,element)=>acc+" | "+element.toUpperCase())
console.log(res2)

//find
let res3=courses.find(element=>element=='react')
console.log(res3)

//findIndex
let res4=courses.findIndex(element=>element==='node')
console.log(res4)


/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/ 
    //test data
    const marks = [78, 92, 35, 88, 40, 67];

    //filter
    let resmarks=marks.filter(elements=>elements>=40)
    console.log(resmarks) 

    //map
    let resmarks1=marks.map(element=>element+5)
    console.log(resmarks1)

    //reduce
    let resmarks2=marks.reduce((acc,element)=>acc>element?acc:element)        
    console.log(resmarks2)

    //find
    let resmarks3=marks.find(element=>element<40)
    console.log(resmarks3)

    //findIndex
    let resmarks4=marks.findIndex(element=>element===92)
    console.log(resmarks4)

    
  