//Set current stock levels
var colaStock = 1;
var chipsStock = 1;
var candyStock = 1;

//Set prices of the products
const cola = 100;
const chips = 50;
const candy = 65;

//Variable for money inserted and item selected
var moneyInserted = 0;
var change = 0;
var selectedProduct = "";

//Variables to keep track of the different coins in the vending machine
var nickels = 0;
var dimes = 0;
var quarters = 0;

//Add nickel value to total inserted coins

function insertNickel() {
    try {
        moneyInserted = moneyInserted + 5;
        document.getElementById("display").value = moneyInserted;
        nickels ++;
    }
    catch(err) {
        document.getElementById("display").innerHTML = err.message;
    }
}
module.exports = insertNickel;

//Add dime value to total inserted coins
function insertDime() {
    try {
        moneyInserted = moneyInserted + 10;
        document.getElementById("display").value = moneyInserted;
        dimes ++;
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}
module.exports = insertDime;

//Add quarter value to total inserted coins
function insertQuarter() {
    try {
        moneyInserted = moneyInserted + 25;
        document.getElementById("display").value = moneyInserted;
        quarters ++;
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}
module.exports = insertQuarter;

//Reject penny if user attempts to insert
function insertPenny() {
    try {
        var x = document.getElementById("display");
        setTimeout(function(){x.value="Pennies not accepted"}, 0);
        setTimeout(function(){x.value=moneyInserted}, 2000);
        document.getElementById("coin_return").value = "1";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}
module.exports = insertPenny;

//Take returned coins
function takeCoins(){
    try {
        var x = document.getElementById("display");
        setTimeout(function(){x.value="Thank you"}, 0);
        var y = document.getElementById("coin_return"); 
            if(y == 1){
                setTimeout(function(){x.value=moneyInserted}, 2000);
            }
            else {
                setTimeout(function(){x.value=""}, 2000);
            }
                document.getElementById("coin_return").value = "";
            if(y == 5) {
                nickels --;
            }
            if(y == 10) {
            dimes --;
            }
            if(y == 25) {
            quarters --;
        }
    }
    catch(err) {
        message.innerHTML = "Error is " + err;
    }
}
module.exports = takeCoins;

//Select Cola and check to see if enough money has been inserted to purchase cola
function selectCola() {
    try {
        if(chipsStock > 0){
            selectedProduct = "Cola";
            productCost = cola;
            document.getElementById("selected").value = selectedProduct;
            if(moneyInserted >= 100) {
                document.getElementById("display").value = "Please Press Vend";
            }
            else {
                document.getElementById("display").value = "Insufficient funds";
            }
        }
        else {
            var x = document.getElementById("display");
            setTimeout(function(){x.value="Sold Out"}, 0);
            setTimeout(function(){x.value="Select another item"}, 2000);
            setTimeout(function(){x.value=moneyInserted}, 4000);
        }
    }
    catch(err) {
        message.innerHTML = "Error is " + err;
    }
}
module.exports = selectCola;

//Select chips and check to see if enough money has been inserted to purchase chips
function selectChips() {
    try {
        if(chipsStock > 0){
            selectedProduct = "Chips";
            productCost = chips;
            document.getElementById("selected").value = selectedProduct;
                if(moneyInserted >= 50) {
                    document.getElementById("display").value = "Please Press Vend";
                }
                else {
                    document.getElementById("display").value = "Insufficient funds";
                }
        }
        else {
            var x = document.getElementById("display");
            setTimeout(function(){x.value="Sold Out"}, 0);
            setTimeout(function(){x.value="Select another item"}, 2000);
            setTimeout(function(){x.value=moneyInserted}, 4000);
        }
    }
    catch(err) {
        message.innerHTML = "Error is " + err;
    }
}
module.exports = selectChips;

//Select Candy and check to see if enough money has been inserted to purchase candy
function selectCandy() {
    try {
        if(chipsStock > 0){
            selectedProduct = "Candy";
            productCost = candy;
            document.getElementById("selected").value = selectedProduct;
            if(moneyInserted >= 65) {
            document.getElementById("display").value = "Please Press Vend";
            }
            else {
             document.getElementById("display").value = "Insufficient funds";
            }
        }
        else {
            var x = document.getElementById("display");
            setTimeout(function(){x.value="Sold Out"}, 0);
            setTimeout(function(){x.value="Select another item"}, 2000);
            setTimeout(function(){x.value=moneyInserted}, 4000);
        }
    }
    catch(err) {
        message.innerHTML = "Error is " + err;
    }
}
module.exports = selectCandy;

//Cancel transaction
function cancel() {
    try{
        var x = document.getElementById("display");
        setTimeout(function(){x.value="Transaction cancelled"}, 0);
        setTimeout(function(){x.value=""}, 2000);
        document.getElementById("selected").value = "";
        document.getElementById("coin_return").value = moneyInserted;
    }
    catch(err) {
        message.innerHTML = "Error is " + err;
    }
}
module.exports = cancel;

//Dispense selected product
function vend() {
    try {
        change = moneyInserted - productCost;
        document.getElementById("dispenser").value = selectedProduct;
        document.getElementById("coin_return").value = change;
            if(change == 0) {
                document.getElementById("coin_return").value = "";
            }
            if(selectedProduct == "Cola"){
                colaStock --;
            }
            if(selectedProduct == "Chips") {
                chipsStock --;
            }
            if(selectedProduct == "Candy") {
                candyStock --;
            }
        }
    catch(err) {
        message.innerHTML = "Error is " + err;
    }
}
module.exports = vend;

//Remove purchased item from the dispenser and check the vanding machines coin levels
function takeProduct() {
    try {
        if(nickels > 0 && dimes > 0 && quarters > 0) {
            var x = document.getElementById("display");
            setTimeout(function(){x.value="Thank you"}, 0);
            setTimeout(function(){x.value=""}, 2000);
            document.getElementById("dispenser").value = "";
            document.getElementById("selected").value = "";
            moneyInserted = 0;
        }
        else {
            var x = document.getElementById("display");
            setTimeout(function(){x.value="Thank you"}, 0);
            setTimeout(function(){x.value="Exact change only!"}, 2000);
            document.getElementById("dispenser").value = "";
            document.getElementById("selected").value = "";
            moneyInserted = 0;
        }
    }
    catch(err) {
        message.innerHTML = "Error is " + err;
    }
}
module.exports = takeProduct;