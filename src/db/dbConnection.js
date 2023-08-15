
import mongoose from "mongoose";



const dbconnection=()=>{
  mongoose.connect('mongodb://0.0.0.0:27017/Stripe').then(()=>{
    console.log("connected db")
  })
}

export default dbconnection;