const numberButtons=document.querySelectorAll(".number");
const operatorButtons=document.querySelectorAll(".operator");
const clearButton=document.querySelector(".clear");
let display=document.querySelector("#display");
let equals=document.querySelector("#equals");



let firstOperand="";
let secondOperand="";
let step=0;
let operator;
let result;


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
                else if (firstOperand.length==0) {
                    window.alert("You havent enter a number to make calculation. Try again");
                    clearResult();
                  
                }
                
                else {
                operator=button.value;
                step=2;
                console.log(operator);
                console.log(step)   ;
                }
            });
        });
    }

    
    /*  Equal button click */
    function getResult(){
          if(step==2 && secondOperand=="") {
             result=Number(firstOperand);
             display.value=result;    
          }

        else if(step==2 && secondOperand!=""){
            if (operator=="+") {
              sum(firstOperand, secondOperand);
            } 

            if (operator=="-")   {
                deduction(firstOperand, secondOperand);
            }

            if (operator=="*")   {
                product(firstOperand, secondOperand);
            }
            
            if (operator==="/")  {
                division(firstOperand, secondOperand);
            }
            
            if (operator=="%"){
                percentage(firstOperand, secondOperand);
            }
        }
            
    }

    function clearResult(){
            step=0;
            result=0;
            display.value="";
            firstOperand="";
            secondOperand="";
            operator=null;
    }

    function sum(value1, value2){
        result=Number(value1)+Number(value2);
        display.value=result;
    }

    function deduction(value1,value2){
          result=Number(value1)-Number(value2);
          display.value=result;
    }

    function product(value1,value2){
        result=Number(value1)*Number(value2);
        display.value=result;
    }

    function division(value1,value2){
        if(value2==="0"){
            window.alert("You can not divide by 0. The result is infinit. Try diffrent numbers");
            clearResult();
        }

        else{
            result=Number(value1)/ Number(value2);
            display.value=result;
        }
    }

    function percentage(value1, value2){
        if(value2=="0"){
            window.alert("You can not find percentage by 0. The result is infinit. Try diffrent numbers");
            clearResult();
        }

        else{
            result=(Number(value1)/Number(value2))*100;
            display.value=result;
        }
    }

    equals.addEventListener("click", getResult);
    clearButton.addEventListener("click", clearResult);


getFirstOperand();
operation();
clearResult();

