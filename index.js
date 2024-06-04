
const numberButtons=document.querySelectorAll(".number");
const operatorButtons=document.querySelectorAll(".operator");
let display=document.querySelector(".display");
let displayText=display.textContent;


numberButtons.forEach(button => {
    button.addEventListener('click' , () =>{
        displayText=displayText+button.textContent;
        display.textContent=displayText;
    })
});

