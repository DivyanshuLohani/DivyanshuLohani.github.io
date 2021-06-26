let principle = document.getElementById('Principle') 
let Rate = document.getElementById('Rate') 
let Time = document.getElementById('Time') 
let button = document.getElementById('calculate')
let clear = document.getElementById('clear')

let amount = document.getElementById('Amount')
let intrest = document.getElementById('intrest')

let amountValue = ''
let intrestValue = ''

button.onclick = function(){
    
    intrestValue = principle.value*Rate.value*Time.value/100

    intrest.value = intrestValue
    let principleValue = parseInt(principle.value);
    amountValue = principleValue + intrestValue
    amount.value = amountValue
}
function func(){
    Time.value = ''
    Rate.value = ''
    principle.value = ''
    amount.value = ''
    intrest.value = ''
}
