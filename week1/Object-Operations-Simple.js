/*const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

Tasks:
    1. Read and print the user’s name and email
    2. Add a new property lastLogin: "2026-01-01"
    3. Update role from "student" to "admin"
    4. Delete the isActive property
    5. Use Object.keys() to list all remaining fields
*/
//test data
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
}

console.log(user.name,user.email)//user's name and email
user.lastLogin="2026-01-01" //adding new property lastLogin
console.log(user) //print user object after adding lastLogin
user.role="admin"  //updating role from student to admin
console.log(user)   //print user object after updating role
delete(user.isActive)  //deleting isActive property
console.log(user)  //print user object after deleting isActive property
console.log(Object.keys(user))  //list all remaining fields using Object.keys()

/*Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90

    */

//test data
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
}
 
let totalMarks=0
//logic to calculate total marks
for(let subject in marks)
{
    totalMarks+=marks[subject]
}
console.log("Total Marks",totalMarks)//output total marks

//logic to calculate average marks

let avg=totalMarks/Object.keys(marks).length

console.log("Average :",avg)

let highestMarks=0
let highestSubject=""
//logic to find highest scoring subject
for(let subject in marks)
{
    if(marks[subject]>highestMarks)
    {
        highestMarks=marks[subject]
        highestSubject=subject
    }
}
console.log("highest marks :",highestMarks,"in subject ",highestSubject)//output highest scoring subject

//add new subject computer with marks 90
marks.computers=90
console.log(marks)//output updated marks object


/*Assignment 3: Application Settings Controller
---------------------------------------------
Scenario : A web app stores user preferences as settings.

Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified

    */

//test data
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
}

settings.theme=settings.theme==="light"?"dark":"light" //ternary operator to toggle theme
console.log(settings.theme) //print updated theme
settings.autoSave=true   //turn autoSave to true
delete(settings.notifications)  //remove notifications setting
Object.freeze(settings)  //freeze settings object so it cannot be modified
settings.language = "tl";  //attempt to modify frozen object
settings.theme = "light";  //attempt to modify frozen object
console.log(settings)  //print settings object to show it has not been modified