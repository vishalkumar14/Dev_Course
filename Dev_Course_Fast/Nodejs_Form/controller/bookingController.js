const planModel = require("../model/planModel");
const stripe = require("stripe")("sk_test_khusjp7XosmhByy6DNXSPb2800mShedEug");

module.exports.checkout = async function(req, res) {
  const id = req.body.id;
  const plan = await planModel.findById(id);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: plan.name,
        description: plan.description,
        amount: plan.price,
        currency: "usd",
        quantity: 1
      }
    ],

    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000"
  });
  res.status(201).json({
    data: plan,
    success: "Payement Object Send",
    session
  });
};
