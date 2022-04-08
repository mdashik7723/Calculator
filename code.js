let displayBox = document.querySelector(".display");

let opeartor = ["+","-","*","/","%","."];

function showDisplay(x){

    let current = displayBox.innerHTML;

    let lastIndex = current[current.length-1];

    if(displayBox.innerHTML == 0){
        return displayBox.innerHTML = x;
    }else if( opeartor.includes(x) &&  opeartor.includes(lastIndex) ){
        return displayBox.innerHTML = current.substring(0,current.length-1)+x;
    }

    return displayBox.innerHTML += x;
}

function calculate(){
    let current = displayBox.innerHTML;
    displayBox.innerHTML = eval(current);
}

function allClear(){
    displayBox.innerHTML = 0;
}

function clearLastWord(){
    let current = displayBox.innerHTML;
    if(current.length == 1){
        displayBox.innerHTML = 0;
    }else{
        displayBox.innerHTML = current.substring(0,current.length-1);
    }
}