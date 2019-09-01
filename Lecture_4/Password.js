var user = {

  your_name: "Vishal Kumar",

  loginOk: function() {
    console.log(this.your_name + " Logged In");
    return this;
  },

  loginFail: function() {
    console.log(this.your_name + " Failed!!");
    return this;
  }
  
};

function passWord(pass, LoginOK, LoginFail) {
  if (pass === "pep") {
    return LoginOK();
  } else {
    return LoginFail();
  }
}

user.loginOk.bind(user);
user.loginFail.bind(user);

user.loginOk();
user.loginFail();

passWord("pep", user.loginOk.bind(user), user.loginFail.bind(user));
passWord("pepcoding", user.loginOk.bind(user), user.loginFail.bind(user));

