import exp from 'express'
import { UserModel } from '../Models/userModel.js';
import { ProductModel } from '../Models/productModel.js';
import { hash,compare } from 'bcryptjs';
export const userApp = exp.Router();

//create user
userApp.get('/users', async (req, res) => {

    try {
        // Wait for DB result
        const users = await UserModel.find();

        // Send response
        res.status(200).json({
            message: "All users",
            payload: users
        });

    } catch (err) {
        res.status(500).json({
            message: "Error fetching users",
            error: err.message
        });
    }
});

userApp.post('/users', async (req, res) => {

  try {

    let newUser = req.body;

    // Validate input
    await new UserModel(newUser).validate();

    // Hash password
    const hashedPassword = await hash(newUser.password, 12);

    newUser.password = hashedPassword;

    // Save user
    let newUserDoc = new UserModel(newUser);

    await newUserDoc.save({ validateBeforeSave: false });

    res.status(201).json({
      message: "User created successfully",
      payload: newUserDoc
    });

  } catch (err) {

    res.status(400).json({
      message: "User creation failed",
      error: err.message
    });

  }
});

//add product to users cart
/*
userApp.put('/users/user-id/:uid/product-id/:pid',async(req,res)=>
{
    
    try {
      
      const { uid, pid } = req.params;

      let user = await UserModel.findById(uid);

      if (!user) {
        return res.status(404).json({
          message: "User not found"
        });
      }

      let product = await ProductModel.findById(pid);

      if (!product) {
        return res.status(404).json({
          message: "Product not found"
        });
      }
      let modifiedUser = await UserModel.findByIdAndUpdate(
    uid,
    { $push: { cart: { product: pid } } },
    { new: true },
  ).populate("cart.product");
  //res
  res.status(200).json({ message: "Product added to cart", payload: modifiedUser });
}


     catch (err) {

      res.status(500).json({
        message: "Server error",
        error: err.message
      })

    }
  })
*/
// Add quantity to cart product
userApp.put('/users/user-id/:uid/product-id/:pid', async (req, res) => {
  try {

    const { uid, pid } = req.params;

    // Find user
    let user = await UserModel.findById(uid);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Find product
    let product = await ProductModel.findById(pid);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    // Check if product already in cart
    let productIndex = user.cart.findIndex(
      item => item.product == pid
    );

    let modifiedUser;

    // If product exists → increase quantity
    if (productIndex > -1) {

      user.cart[productIndex].quantity += 1;

      // Save updated user
      modifiedUser = await user.save();

    } 
    // If product does not exist → add new
    else {

      modifiedUser = await UserModel.findByIdAndUpdate(
        uid,
        { $push: { cart: { product: pid, quantity: 1 } } },
        { new: true }
      );

    }

    // Populate product details
    let modifiedCart = await modifiedUser.populate("cart.product");

    res.status(200).json({
      message: "Product added to cart",
      payload: modifiedCart
    });

  } catch (err) {

    res.status(500).json({
      message: "Server error",
      error: err.message
    });

  }
});


userApp.get('/users/:uid',async(req,res)=>
{
  let {uid}=req.params
  let user=await UserModel.findById(uid).populate("cart.product")
  res.status(200).json({message:"user found",payload:user})
})


