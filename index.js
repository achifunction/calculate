"use strict"
const billinput = document.getElementById("bill");
const custominput = document.getElementById("costbutton");
const peopleinput = document.getElementById("person");
const button5 = document.getElementById("b5%");
const button10 = document.getElementById("b10%");
const button15 = document.getElementById("b15%");
const button25 = document.getElementById("b25%");
const button50 = document.getElementById("b50%");
const resetbutton = document.getElementById("reset");
let result = 0;
let total = 0;
let butto = 0;
const number = document.querySelectorAll(".number")


billinput.addEventListener("input", () => {
    buttonfunction(billinput.value ,peopleinput.value, butto);
    totalCalculeit(billinput.value ,peopleinput.value, butto);
});

peopleinput.addEventListener("input", () => {
    buttonfunction(billinput.value ,peopleinput.value, butto);
    totalCalculeit(billinput.value ,peopleinput.value, butto);
  
})

custominput.addEventListener("input", () => {
    buttonfunction(billinput.value ,peopleinput.value, custominput.value );
    totalCalculeit(billinput.value ,peopleinput.value, custominput.value)
    
    butto = custominput.value
})

   function clear() {
    document.getElementById("bill" ,"person").reset();

   }

   function buttonfunction(a,b,c) {
    if( a > 0 && b > 0 &&  c > 0 && c < 100) {
     result = "$"+(((a/b)*c)/100).toFixed(2);
     number[0].innerHTML =  result
    }
   } 

   function totalCalculeit(a,b,c) {
    if( a > 0 && b > 0 &&  c > 0 && c < 100){
    total = "$"+ ((+a+(a*c/100))/b).toFixed(2);
    number[1].innerHTML = total 
}
 }
 
  
button5.addEventListener("click" , function() {
    buttonfunction(billinput.value ,peopleinput.value, 5 );
    totalCalculeit(billinput.value ,peopleinput.value, 5)
    butto = 5;

});

button10.addEventListener("click" , function() {
    buttonfunction(billinput.value ,peopleinput.value, 10 );
    totalCalculeit(billinput.value ,peopleinput.value, 10)
    butto = 10;
});

button15.addEventListener("click" , function() {
    buttonfunction(billinput.value ,peopleinput.value, 15 );
    totalCalculeit(billinput.value ,peopleinput.value, 15)
    butto = 15;

});
 
button25.addEventListener("click" , function() {
    buttonfunction(billinput.value ,peopleinput.value, 25 );
    totalCalculeit(billinput.value ,peopleinput.value, 25);
    butto = 25;

});

button50.addEventListener("click" , function() {
    buttonfunction(billinput.value ,peopleinput.value, 50 );
    totalCalculeit(billinput.value ,peopleinput.value, 50);
    butto = 50;
});



reset.addEventListener("click" ,function () {

  billinput.value = "";
  peopleinput.value = "";
  custominput.value = "";
  
})
  

