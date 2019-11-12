const stripe = Stripe("sk_test_khusjp7XosmhByy6DNXSPb2800mShedEug");


const login = document.querySelector(".section-login");
const forgetPassword = document.querySelector(".forget");

const singupButtons = document.querySelectorAll(".signup-button");


login.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputs = document.getElementsByTagName("input");
    const email = inputs[0].value;
    const password = inputs[1].value;
    // console.log("i was called");
    mylogin(email, password);
  });
}