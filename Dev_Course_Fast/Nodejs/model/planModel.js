const mongoose = require("mongoose");

const DB =
  "mongodb+srv://vishalipu14:vishalkumar@cluster0-pjy0l.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(function(conn) {
    console.log(conn.connection);
  });

const planSchema = new mongoose.Schema({
  name: { type: String, required: ["Name is a Required Field"] },
  price: { type: Number, min: 20 },
  description: { type: String, required:["Description is a Required Field"] },
  averagerating: Number,
  duration: { type: Date }
});

const planModel = mongoose.model("planModel", planSchema);
module.exports = planModel;
