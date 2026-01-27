/*
MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses
    */

  import {users,courses,cart,roles} from "./data.js";

//Merge cart with courses to get full course info
let cartWithCourseInfo=cart.map(cartItem=>{ 
    let courseInfo=courses.find(course=>course.id===cartItem.courseId)
    return {...cartItem, title:courseInfo.title, price:courseInfo.price, published:courseInfo.published}
})
console.log(cartWithCourseInfo);

//Calculate total cart amount
let totalCartAmount=cartWithCourseInfo.reduce((total, item)=>total+(item.price*item.qty),0)
console.log(totalCartAmount);   


//Increase quantity of a course (immutably)
let increaseQtyCourseId=103
let updatedCart=cart.map(cartItem=>{
    if(cartItem.courseId===increaseQtyCourseId){
        return {...cartItem, qty:cartItem.qty+1}
    }

    return cartItem;
})

console.log(updatedCart);
console.log(cart);

//Remove a course from cart
let removeCourseId=101
let cartAfterRemoval=cart.filter(cartItem=>cartItem.courseId!==removeCourseId)
console.log(cartAfterRemoval);


//Check if all cart items are paid courses
let allPaidCourses=cartWithCourseInfo.every(item=>item.price>0)
console.log(allPaidCourses);    

