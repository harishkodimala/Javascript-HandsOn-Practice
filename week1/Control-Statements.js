/*HANDS-ON 1: Smart Login Status Engine
----------------------------------------

Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;

Tasks:
   1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in and profile complete → show "Welcome back!"
   4. Store the result in message
   5. Print the message
  */
   let isLoggedIn=true;
   let isProfileComplete= true;
   let result="";

   if(!isLoggedIn)
   {
    result="Please Login"  //message when user is not logged in
   }
   else if(isLoggedIn)
   {
    if(!isProfileComplete)
    {
        result="Complete your Profile";  //message when profile is incomplete
    }
    else{
        result="Welcome back!";   //message when user is logged in and profile is complete
    }
   }

   console.log(result);  //result message 


/*HANDS-ON 2: Course Price Tag Labeler
------------------------------------
Initial data:
     let price = 1299;

Tasks:
   1. If price < 500 → "Budget Course"
   2. If price between 500–1000 → "Standard Course"
   3. If price > 1000 → "Premium Course"
   4. Store label in courseTag
   5. Print the label
*/

let price=1000
let courseTag=""

if(price < 500)
{
  courseTag="Budget Course" //message for budget course
}
else if(price>500 && price<1000)
{
    courseTag="Standard Course"  //message for standard course
}
else{
    courseTag="Premium Course"  //message for premium course
}

console.log(courseTag) //print the course tag message


/*HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

Tasks:
   1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message
   */

   let hasPaid=true
   let hasCompletedBasics=false

   let enrollMessage=(hasPaid && hasCompletedBasics)?"Enroll Now":"Complete Requirements" //ternary operator to check enrollment eligibility

   console.log(enrollMessage) //print enrollment message