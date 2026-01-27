/*
MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably

  */

import {users, courses, cart, roles} from "./data.js";

//Get published courses
let publishedCourses=courses.filter(course=>course.published)
console.log(publishedCourses);

//Sort courses by price (high → low)
let sortedCourses=[...courses].sort((a,b)=>b.price-a.price)
console.log(sortedCourses);

//Extract { title, price } only
let titleAndPriceCourses=courses.map(course=>({title:course.title, price:course.price}))
console.log(titleAndPriceCourses);

//Calculate total value of published courses
let totalValuePublishedCourses=publishedCourses.reduce((total, course)=>total+course.price,0)
console.log(totalValuePublishedCourses);

//Add a new course immutably
let newCourse={id:104, title:"Python", price: 1199, published:true}
let updatedCourses=[...courses, newCourse]
console.log(updatedCourses);
console.log(courses);   

