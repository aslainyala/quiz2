function calc(){
    let operator = document.getElementById("operator").value;
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let result = document.getElementById("result");
    result.style.color = 'red';
    
    switch(operator){
        case '+':
            result.innerHTML = firstNumber + secondNumber;
            break;
        case '/':
            result.innerHTML = firstNumber / secondNumber;
            break;
        case '-':
            result.innerHTML = firstNumber - secondNumber;
            break;
        case '*':
            result.innerHTML = firstNumber * secondNumber;
            break;
        default:
            result.innerHTML = "Invalid Input";
            result.style.color = 'black';

    }
}