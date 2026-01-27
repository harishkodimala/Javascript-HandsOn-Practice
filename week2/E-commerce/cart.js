/*ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            // 2. Check stock availability
                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                            // 4. Return success/error message
                          }
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            // Check stock before updating
                          }
                          
                          export function getCartItems() {
                            // Return all cart items with product details
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                          }
*/

// Importing necessary functions from product.js

import { getProductById, checkStock} from './product.js';

let cartItems=[];

// Add product to cart
export function addToCart(productId, quantity) {
    let product=getProductById(productId);
    if(!product)
    {
        return "Product not found";
    }
    if(!checkStock(productId, quantity))
    {
        return "Insufficient stock";
    }
    const existingItem=cartItems.find(item=>item.productId===productId);
    if(existingItem)
    {
        if(!checkStock(productId, existingItem.quantity+quantity))
        {
            return "Insufficient stock";
        }
        existingItem.quantity+=quantity;
    }
    else
    {
        cartItems.push({productId, quantity});
    }
    return "Product added to cart";
}

// Remove product from cart
export function removeFromCart(productId) {
    cartItems=cartItems.filter(item=>item.productId!==productId);
}   

// Update quantity of product in cart
export function updateQuantity(productId, newQuantity) {
    let product=getProductById(productId);
    if(!product)
    {
        return "Product not found";
    }   
    if(!checkStock(productId, newQuantity))
    {
        return "Insufficient stock";
    }   
    const existingItem=cartItems.find(item=>item.productId===productId);
    if(existingItem)
    {
        existingItem.quantity=newQuantity;
        return "Quantity updated";
    }
    return "Product not in cart";
}

// Return all cart items with product details

export function getCartItems() {
    return cartItems.map(item=>{
        let product=getProductById(item.productId);
        return {...item, name:product.name, price:product.price};
    });
}

// Calculate total price of all items in cart
export function getCartTotal() {
    return cartItems.reduce((total, item)=>{
        let product=getProductById(item.productId);
        return total+(product.price*item.quantity);
    },0);
}

// Empty the cart
export function clearCart() {
    cartItems=[];
}   
