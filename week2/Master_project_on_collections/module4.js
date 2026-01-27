/*
MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably

  */

import {users, courses, cart, roles} from "./data.js";

//Get all role names
let roleNames=Object.keys(roles)
console.log(roleNames);

//Check if student can delete
let canStudentDelete=roles.student.includes("delete")
console.log(canStudentDelete);

//Create a flat list of all unique permissions
let allPermissions=new Set()
for(let role in roles){
    roles[role].forEach(permission=>allPermissions.add(permission))
}
console.log(allPermissions);

//Add new role moderator immutably
let newRoles={...roles, moderator:["read", "write", "delete"]}
console.log(newRoles);      
console.log(roles);

