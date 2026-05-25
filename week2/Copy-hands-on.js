/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/
const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

let copyUser={...user}//shallow copy using spread operator

copyUser.name='Harish' //changing name in copied object

copyUser.preferences.theme='light' //changing theme in copied object

console.log(user) //original object
console.log(copyUser)  //copied object

/*Observation:
1. When we change the name in the copied object, it does not affect the original object because name is a primitive value.
2. However, when we change the preferences.theme in the copied object, it also affects the original object because preferences is a nested object and only the reference is copied in a shallow copy.
-------------------------------------------------------*/



/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged

*/
const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
 
let copyOrder=structuredClone(order)//deep copy using structuredClone
 
copyOrder.customer.address.city="Banglore"  //modifying city in copied object
copyOrder.items[0].price=2000   //modifying price in copied object
console.log(copyOrder)   //copied object
console.log(order)     //original object
/*Observation:
1. In deep copy, when we modify nested objects or arrays in the copied object, it does not affect the original object.
2. The original object remains unchanged, ensuring isolation and safety.
---------------------------------------------------*/
