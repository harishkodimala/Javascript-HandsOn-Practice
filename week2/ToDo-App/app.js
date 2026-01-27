/*
 iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again

*/

// Import task functions

import { addTask, getAllTasks, completeTask } from './task.js';

// 1. Add some tasks
console.log(addTask("Finish project", "high", "2026-12-31"));
console.log(addTask("Buy groceries", "medium", "2026-11-01"));
console.log(addTask("Go", "low", "2022-01-01")); // Invalid (past date)

// 2. Display all tasks
console.log("All Tasks:", getAllTasks());

// 3. Complete a task
console.log(completeTask(3));

// 4. Display all tasks again
console.log("All Tasks after completion:", getAllTasks());
