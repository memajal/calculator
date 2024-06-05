const numberButtons=document.querySelectorAll(".number");
const operatorButtons=document.querySelectorAll(".operator");
let display=document.querySelector("#display");


numberButtons.forEach(button => {
    button.addEventListener('click' , () =>{

        display.value=display.value+button.value;
    })
});

