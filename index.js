const numberButtons=document.querySelectorAll(".number");
const operatorButtons=document.querySelectorAll(".operator");
let display=document.querySelector("#display");

let firstOperand="";

function getFirstOperand() {
numberButtons.forEach(button => {
    button.addEventListener('click' , () =>{
        firstOperand+=button.value;
        display.value=firstOperand;
        console.log(firstOperand);
    })
});
}

getFirstOperand();
