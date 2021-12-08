let input = document.querySelector(".input");
let form = document.querySelector(".form");
let peopleValue = document.getElementById('people-value');
let billValue = document.getElementById('bill-value');
let inputValue = document.querySelector('.input-num');
let people = document.querySelector('.people');
let bill = document.querySelector('.bill');
let btn = document.querySelector('.button');
let option = document.querySelector('.tip-option');
let five = document.getElementById('five');
let ten = document.getElementById('ten');
let fifteen = document.getElementById('fifteen');
let twentyfive = document.getElementById('twentyfive');
let fifty = document.getElementById('fifty');
let custom = document.getElementById('custom');
let tipAmount = document.getElementById('tip-amount');
let totalAmount = document.getElementById('total-amount');
let per=0;
let amount;
let total;

console.log('its link');

function error(){
    if (peopleValue.value <= 0) {
        people.classList.add("error");

    }
    else {
        people.classList.remove("error");
    }

    if (billValue.value <= 0) {
        bill.classList.add("error");

    }
    else {
        bill.classList.remove("error");
    }
    if (peopleValue.value == '') {
        btn.classList.add('empty');
    }
    else {
        btn.classList.remove('empty');
    }
};


setInterval(function () {

    if (custom.value!=0){
        per = custom.value;
    }
    else if (five.checked == true) {
        per = five.value;
        
        
    }
    else if (ten.checked == true) {
        per = ten.value;
       
    }
    else if (fifteen.checked == true) {
        per = fifteen.value;
        
    }
    else if (twentyfive.checked == true) {
        per = twentyfive.value;
        
    }
    else if (fifty.checked == true) {
        per = fifty.value;
    }

    if(billValue.value <= 0 || peopleValue.value <= 0 || per == 0){
        
    }

    else {
        amount = (billValue.value * per) / peopleValue.value;
        amount = Math.round(amount) / 100;
        tipAmount.innerHTML = amount.toFixed(2);
        total = (Number(billValue.value)) / peopleValue.value;
        total = total + Number(amount);
        totalAmount.innerHTML = total.toFixed(2);
    }
    }, 1000);

form.addEventListener('focusout', e => {
    e.preventDefault();
    error();
})


btn.addEventListener('click', e => {
    document.location.reload(true);
})


