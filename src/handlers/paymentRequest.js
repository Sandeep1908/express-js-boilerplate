import dailyLimits from "../models/clientSchema"
import credentials from '../.././credientials.json'
import getClientSecret from "../stripe/stripe";

export const paymentRequestHandler = async (req, res) => {
  const { price } = req.body;

  if (price < 300) {

    const luckyNumber =  Math.floor(Math.random() * (credentials.length + 1) + 0)
    res.send( await getClientSecret(credentials[0].merchantId ,price))


    // const date = new Date().toDateString();
    // // console.log(date);
    // const data = await dailyLimits.find({
    //   totalPaid: { $lt: 300 },
    //   date: date,
    // });

    // const merchantIdDL = data.map((dt) => dt.merchantId);
    // if (merchantIdDL.length) {
    //   const merchantIdR = data.find((dl) => {
    //     return 300 >= dl.totalPaid + price;
    //   })?.merchantId;

    //   res.send(await getClientSecret(merchantIdR,price))
      

    //   if (!merchantIdR) {
    //       const rem=credentials.find((dl)=> !merchantIdDL.includes(dl.merchantId))
    //       res.send(await getClientSecret(rem.merchantId,price))
          
    //   }
    // }

    // else{
    //     const rem=credentials[0]
    //     res.send( await getClientSecret(rem.merchantId,price))

    // }


   
  }

  
};
