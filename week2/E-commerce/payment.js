/*iv. payment.js - Payment processing
                          import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                          export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            // 2. Apply discount if coupon provided
                            // 3. Validate payment method (card/upi/cod)
                            // 4. Process payment (simulate)
                            // 5. Reduce stock for all items
                            // 6. Clear cart
                            // 7. Generate order summary
                            
                            // Return order summary:
                            // {
                            //   orderId: ...,
                            //   items: [...],
                            //   subtotal: ...,
                            //   discount: ...,
                            //   total: ...,
                            //   paymentMethod: ...,
                            //   status: 'success/failed',
                            //   message: '...'
                            // }
                          }
                          
                          export function validatePaymentMethod(method) {
                            // Check if method is valid (card/upi/cod)
                          }
                          
                          function generateOrderId() {
                            // Generate random order ID
                            return 'ORD' + Date.now();
                          }

*/

import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
// Validate payment method
export function validatePaymentMethod(method) {
    const validMethods=["card", "upi", "cod"];
    return validMethods.includes(method);
}

// Process payment  
export function processPayment(paymentMethod, couponCode=null) {
    const cartItems=getCartItems();
    if(cartItems.length===0)
    {
        return { status: "failed", message: "Cart is empty" };
    }   
    let cartTotal=getCartTotal();
    let discountDetails={ originalTotal: cartTotal, discount: 0, finalTotal: cartTotal, message: "" };          
    if(couponCode)
    {
        discountDetails=applyDiscount(cartTotal, couponCode, cartItems);
        if(discountDetails.discount===0)
        {
            return { status: "failed", message: discountDetails.message };
        }   
        cartTotal=discountDetails.finalTotal;
    }
    if(!validatePaymentMethod(paymentMethod))
    {
        return { status: "failed", message: "Invalid payment method" };
    }
    // Simulate payment processing
    const paymentSuccess=true;  
    if(!paymentSuccess)
    {
        return { status: "failed", message: "Payment processing failed" };
    }
    // Reduce stock for all items
    cartItems.forEach(item=>{
        reduceStock(item.productId, item.quantity);
    }
    );
    // Clear cart
    clearCart();
    // Generate order summary
    const orderId="ORD"+Date.now();
    return {
        orderId: orderId,
        items: cartItems,
        subtotal: discountDetails.originalTotal,
        discount: discountDetails.discount,
        total: cartTotal,
        paymentMethod: paymentMethod,
        status: "success",
        message: "Order placed successfully"
    };
}

function generateOrderId() {
    return "ORD"+Date.now();
}


