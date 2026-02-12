/*Assignment 1: Date Creation & Extraction 
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:MM:SS
---------------------------------------------------*/

//create Date object
let currentdate=new Date()

//extract date components
let year=currentdate.getFullYear()
let month=currentdate.getMonth()+1
let date=currentdate.getDate()
let day=currentdate.getDay()
let hours=currentdate.getHours()
let minutes=currentdate.getMinutes()
let seconds=currentdate.getSeconds() 

//display extracted components   
console.log(date+'-'+month.toString()+'-'+year+' '+hours+':'+minutes+':'+seconds)


/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid

*/

let enrollmentDeadline = new Date("2026-01-21"); 
let today=new Date();

if(today>enrollmentDeadline)  
{
    console.log("ENrollmennt Open")
}
else{
    console.log("Enrollment closed")
}

let datestr="2026-02-30";
let inputDate=new Date(datestr);

if(!isNaN(inputDate)&& datestr===inputDate.toISOString().split("T")[0])
{
    console.log("Valid Date");
}
else{
    console.log("Invalid Date");
}

/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years

        */
let dob = "2005-04-17";
let dobDate=new Date(dob);
let tod=new Date();

let age=tod.getFullYear()-dobDate.getFullYear(); //calculate year difference
let monthDiff=tod.getMonth()-dobDate.getMonth();  //calculate month difference
//adjust age if current month is before birth month
if(monthDiff<0) 
{
    age--;
    monthDiff+=12;
}

console.log("Age is "+age+" years and "+monthDiff+" months");



