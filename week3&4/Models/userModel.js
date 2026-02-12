import { Schema,model } from "mongoose";
/*const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product" //name of the product
    }
})*/

const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product" //name of the product
    },
    quantity:
    {
      type:Number,
      default:1,
      min:1
    }
})

const userSchema=new Schema(
    {
        name:{
            type:String,
            required:[true,"name is required"]
        },
        email:
        {
            type:String,
            required:[true,"email is required"],
            unique:[true,"duplicate Email ID"]
        },
        password:
        {
            type:String,
            required:[true,"password is required"]
        }
        ,cart:
        {
            type:[cartSchema]
        }

    }
)
export const UserModel=model("user",userSchema)