/*i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }

*/
// Export functions
export { validateTitle, validatePriority, validateDueDate };

// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if(title && title.length >= 3) {
    console.log("Valid title");
  }
  else {
    console.log("Invalid title: must be at least 3 characters long");
  }

  //validate property

  return title && title.length >= 3;
}   
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  const validPriorities = ["low", "medium", "high"];  
  if(validPriorities.includes(priority)) {
    console.log("Valid priority");
  } 

  else {
    console.log("Invalid priority: must be one of 'low', 'medium', 'high'");
  }
  return validPriorities.includes(priority);

} 

// 3. Validate due date (must be future date)
function validateDueDate(date) {


  const dueDate = new Date(date);
  const currentDate = new Date(); 
  if(dueDate > currentDate) {
    console.log("Valid due date");
  }   

  else {
    console.log("Invalid due date: must be a future date");
  }
  return dueDate > currentDate;

}     



