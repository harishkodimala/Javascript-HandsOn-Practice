import {users, courses, cart, roles} from "./data.js";

/*
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably
*/
 //get only active users
let activeUsers=users.filter(user=>user.active)
console.log(activeUsers);

//Extract names of active users
let activeUserNames=activeUsers.map(user=>user.name)
console.log(activeUserNames);

//Check if any admin exists
let isAdminPresent=users.some(user=>user.role==="admin")
console.log(isAdminPresent);

//Find user by id
let userId=2
let userById=users.find(user=>user.id===userId)
console.log(userById);

//Deactivate a user immutably
let deactivateUserId=3
let updatedUsers=users.map(user=>{
    if(user.id===deactivateUserId){
        return {...user, active:false}
    }
    return user;
})

console.log(updatedUsers);

console.log(users);
