import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/userRouter.js';
import { productApp } from './APIs/productRouter.js';

const app=exp()
const port=4000;
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/ecomdb');
        console.log("Database Connected Successfully");
        app.listen(port, () => {
            console.log("Server running on port 4000");
        });

    } catch (err) {
        console.log("DB Error:", err);
    }
}

// Call DB function
connectDB();

app.use(exp.json());

//forwarding requsts to specific routs
app.use('/user-router', userApp);
app.use('/product-router',productApp)

//error errorHandling middleware
app.use((err,req,res,next)=>
res.status(500).json({message:"error",error:err.message}))
