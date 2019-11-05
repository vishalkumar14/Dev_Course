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
    console.log("DB(User) is Connected");
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    maxlength: 40,
    unique: true
  },
  role: {
    type: String,
    enum: ["admin", "restrautantOwner", "user", "deliveryBoy"],
    default: "user"
  },
  email: { type: String, required: [true], unique: true },
  uname: { type: String, required: [true], unique: true },
  password: { type: String, required: [true] },
  confirmpassword: {
    type: String,
    required: [true],
    validate: {
      validator: function() {
        return this.password === this.confirmpassword;
      },
      message: "Password does not matched"
    }
  }
});

userSchema.pre("save", function() {
  this.confirmpassword = undefined;
});

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
