var ajax = require("./lib/filedownload");


var total = 100;
var charges = 20;

function chargeCreditCard(){
    total = total - charges;
    console.log(total);
}

ajax.trackCheckout(charges, chargeCreditCard);