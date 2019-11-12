const mongoose = require("mongoose");

const DB =
  "mongodb+srv://vishalipu14:vishalkumar@cluster0-pjy0l.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(function(conn) {
    console.log("DB(Plan) is Connected");
  });
/*
 
  {
    "packageType": "Premium",
    "price": 250,
    "mealFreq": "1 meal 10 days/month",
    "OrderType": "Order 24/7",
    "access": true
  }

  */

const planSchema = new mongoose.Schema({
  packageType: { type: String, required: true },
  price: { type: Number, min: 1, default: 0, required: true },
  mealFreq: { type: String, required: true, minlength: 6 },
  OrderType: { type: String, required: true, minlength: 10 },
  access: { type: String, require: true, minlength: 6 }
});

const planModel = mongoose.model("planModel", planSchema);
module.exports = planModel;

//http://localhost:3000/api/plan?price[gt]=200&averagerating[gte]=4
