/*
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }

*/

const mongoose = require("mongoose");

const DB =
  "mongodb+srv://vishalipu14:vishalkumar@cluster0-pjy0l.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify : false
  })
  .then(function(conn) {
    console.log("DB(User) is Connected");
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: ["Name is a Required Field"] },
  userName: { type: String, required: ["UserName is a Required Field"] },
  phone: { type: String, required: ["Phone Number is a Required Field"] }
});

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;