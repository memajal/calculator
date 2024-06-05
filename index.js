const numberButtons=document.querySelectorAll(".number");
const operatorButtons=document.querySelectorAll(".operator");
const clearButton=document.querySelector(".clear");
let display=document.querySelector("#display");
let equals=document.querySelector("#equals");

let firstOperand="";
let secondOperand="";
let step=0;
let operator;


function getFirstOperand() {
      numberButtons.forEach(button => {
      button.addEventListener('click' , () =>{
        if(step==0 || step==1){
        step=1;   
        firstOperand+=button.value;
        display.value=firstOperand;
        console.log(firstOperand);
        }

        else if(step==2){
         secondOperand+=button.value;
         display.value=secondOperand;
         console.log(secondOperand);

        }
        })
       });
    }
    

    function operation() {
        operatorButtons.forEach(button => {
            button.addEventListener('click' , () =>{
                if(firstOperand.length!=0 && secondOperand.length!=0) {
                    getResult();
                    firstOperand=result;
                    secondOperand="";
                    operator=button.value;
                    console.log(operator);
                    console.log(step);    
                }
                else {operator=button.value;
                step=2;
                console.log(operator);
                console.log(step)   ;
                }
            });
        });
    }

    

    /*  Equal button click */
    function getResult(){
            if (operator=="+") {
              result=Number(firstOperand)+Number(secondOperand);
              console.log(result);
              display.value=result;
            } 
            if (operator=="-")   {
              result=Number(firstOperand)-Number(secondOperand);
              console.log(result);
              display.value=result;
            }
            if (operator=="*")   {
                result=Number(firstOperand)*Number(secondOperand);
                console.log(result);
                display.value=result;
            }
            if (operator=="/")   {
                if(secondOperand=="0"){
                    display.value="NAN";
                    clearResult();
                }
                
                else{
                result=Number(firstOperand)/Number(secondOperand);
                console.log(result);
                display.value=result;}
            }
      }

    function clearResult(){

        clearButton.addEventListener("click", () => {
            step=0;
            result=0;
            display.value=0;
            firstOperand="";
            secondOperand="";

        });
    }

    equals.addEventListener("click", getResult);


getFirstOperand();
operation();
clearResult();

