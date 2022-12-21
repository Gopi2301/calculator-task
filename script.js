var display = document.querySelector(".data");

// Mouse Click
function calcfun(e){
    var value_calc= display.innerText;
    var last_val = value_calc.slice(-1)[0];
    var expression = ['+','-','*','/']
    if (!expression.includes(last_val)){
        display.innerText = value_calc+e.innerText;
    } else if (!expression.includes(e.innerText)){
        display.innerText = value_calc+e.innerText;
        
    } 
}


document.querySelector('body').addEventListener('keypress', (event)=>{
    if (event.code.includes("Digit")|| event.code.includes("Numpad")){
    var value_calc= display.innerText;
        
        display.innerText=  value_calc+event.key;
    }
})


