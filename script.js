var display = document.querySelector(".display");

function calcfun(e){
    var value_calc= display.innerText
    console.log(e.innerText);
    display.innerText = value_calc+e.innerText
}
