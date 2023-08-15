
import credientials from '../../credientials.json'


const getClientSecret = async (merchantId, price) => {
      const secretKey=credientials.find((d)=>d.merchantId === merchantId).secretKey
      const stripe = require("stripe")(secretKey);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: price*100,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return paymentIntent.client_secret
}

export default getClientSecret;
