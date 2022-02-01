// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
let yourName = "Diego Barreto" 
//-------------------------------------------------------------------------------------------------------------------------------------------------
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
//-------------------------------------------------------------------------------------------------------------------------------------------------
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
// selecting the element with an id of minus-gb
const gbMinusBtn = document.querySelector('#minus-gb')
// selecting the element with an id of qty-gb
const gbQuantity = document.querySelectorAll('#qty-gb')
// Code to update name display
credit.textContent = `Created by ${yourName}`
//-------------------------------------------------------------------------------------------------------------------------------------------------
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
if(gb >= 0){
    gb ++;
    document.getElementById("qty-gb").innerHTML = gb;
}
var Total = gb + cc + sugar;
    document.getElementById('qty-total').innerHTML = Total;
})
//-------------------------------------------------------------------------------------------------------------------------------------------------
gbMinusBtn.addEventListener('click', function() {
    if(gb > 0){
        gb --;
        document.getElementById("qty-gb").innerHTML = gb;
}
var Total = gb + cc + sugar;
    document.getElementById('qty-total').innerHTML = Total;
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const ccQuantity = document.querySelectorAll('#qty-cc')
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
ccPlusBtn.addEventListener('click', function() {
    if(cc >= 0){
        cc ++;
        document.getElementById("qty-cc").innerHTML = cc;
}
var Total = gb + cc + sugar;
    document.getElementById('qty-total').innerHTML = Total;
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
ccMinusBtn.addEventListener('click', function(){
    if (cc > 0){
        cc--;
        document.getElementById("qty-cc").innerHTML = cc;
}
var Total = gb + cc + sugar;
    document.getElementById('qty-total').innerHTML = Total;
})
//________________________________________________________________________________________________________________________________________________
const sgPlusBtn = document.querySelector('#add-sugar')
const sgMinusBtn = document.querySelector('#minus-sugar')
const sgQuantity = document.querySelectorAll('#qty-sugar')
//________________________________________________________________________________________________________________________________________________
sgPlusBtn.addEventListener('click', function(){
    if(sugar >= 0){
        sugar ++;
            document.getElementById('qty-sugar').innerHTML = sugar;
}
var Total = gb + cc + sugar;
    document.getElementById('qty-total').innerHTML = Total;
})
//________________________________________________________________________________________________________________________________________________
sgMinusBtn.addEventListener('click', function(){
    if(sugar > 0){
        sugar --;
            document.getElementById('qty-sugar').innerHTML = sugar;
}
var Total = gb + cc + sugar;
    document.getElementById('qty-total').innerHTML = Total;
})
///////////////////////// Total //////////////////////////////
const Totalqty = document.querySelectorAll('#qty-total')
// Gingerbread (-)  
// Chocolate Chip (>)
// Sugar Sprinkle (_)