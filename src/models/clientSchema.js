import mongoose from "mongoose";

const clientSchema=new mongoose.Schema({

  merchantId:String,
  date:String,
  totalPaid:Number

})

const dailyLimits=new mongoose.model('dailyLimits',clientSchema);
dailyLimits({
  merchatId:'abc111',
  date:new Date(),
  totalPaid:290
})

export default dailyLimits;