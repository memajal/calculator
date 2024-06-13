const numberButtons=document.querySelectorAll(".number");   // all number buttons
const operatorButtons=document.querySelectorAll(".operator");  // all operator buttons
const clearButton=document.querySelector(".clear"); // C clear button
let display=document.querySelector("#display");  // display text field
let equals=document.querySelector("#equals");  // = button
let pointButton=document.querySelector(".point"); // . button
let plusMinusButton=document.querySelector(".plusMinus"); // +/- button


let firstOperand="";   
let secondOperand="";
let step=0; // step to find if user has enter the first or second operand
let operator;
let result;

// function to save the first and second operan in the respective variables
function getOperand() {
      numberButtons.forEach(button => {
      button.addEventListener('click' , () =>{

        if(step==0 || step==1){
        step=1;   
        firstOperand+=button.value;
        display.value=firstOperand;
        displayMaxChar ();
        }

        else if(step==2){
         secondOperand+=button.value;
         display.value=secondOperand;
         displayMaxChar ();
        }
        })
       });

       
    }
    
// function of user operator click 
    function operation() {
        operatorButtons.forEach(button => {
            button.addEventListener('click' , () =>{
                // when the user has entered 2 operands and click another operator not the result, calculate the first 2 operands than continue
                if(firstOperand.length!=0 && secondOperand.length!=0) {
                    getResult();
                    firstOperand=result;
                    secondOperand="";
                    step=2;
                    operator=button.value; 
                }

                else if (firstOperand.length==0) {
                    window.alert("You havent enter a number to make calculation. Try again");
                    clearResult();
                  
                }
                // set the step 2 if the user has clicked an operand and than the operator
                else {
                operator=button.value;
                step=2;
                }
            });
        });
    }

    
    /*  when user click the = button */
    function getResult(){
          if(step==2 && secondOperand=="") {
             result=parseFloat(firstOperand);
             display.value=result;    
          }

      // when the user click the operator call the respective function based on the operators
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


    // clear all the operators and results when the user click clear 
    function clearResult(){
            step=0;
            result=0;
            display.value="";
            firstOperand="";
            secondOperand="";
            operator=null;
    }

    // respective sum, deduction, product, division and percentage functions
    function sum(value1, value2){
        result=parseFloat(value1)+parseFloat(value2);
        display.value=result;
        
    }

    function deduction(value1,value2){
          result=parseFloat(value1)-parseFloat(value2);
          display.value=result;
    }

    function product(value1,value2){
        result=parseFloat(value1)*parseFloat(value2);
            display.value=result;
        }

    function division(value1,value2){
        if(value2==="0"){
            window.alert("You can not divide by 0. The result is infinit. Try diffrent numbers");
            clearResult();
        }

        else{
            result=parseFloat(value1).toFixed(10)/ parseFloat(value2).toFixed(10);
            display.value=result;
        }
    }

    function percentage(value1, value2){
        if(value2=="0"){
            window.alert("You can not find percentage by 0. The result is infinit. Try diffrent numbers");
            clearResult();
        }

        else{
            result=(Number(value1).toFixed(10)/Number(value2).toFixed(10))*100;
            display.value=result.toFixed(10);
        }
    }

    // +/- added before a number button function
    function plusMinusFunction() {
        plusMinusButton.addEventListener('click' , () =>{
            // if the user has entered the first operator add - befor it and when it clicks again remove it
            if (step==0 || step==1) {
              
                if(firstOperand.includes("-")){
                    firstOperand=firstOperand.replace("-", "");
                    display.value=firstOperand;
                }

                else{ 
                firstOperand="-"+ firstOperand;
                display.value=firstOperand;
                }     
            }
      
     // if the user has entered the second operator add - befor it and when it clicks again remove it
           else if(step==2){
               if(secondOperand.includes("-")){
                secondOperand=secondOperand.replace("-", "");
                display.value=secondOperand;
               }

               else{ 
                secondOperand="-"+secondOperand;
                display.value=secondOperand;
                }            
            }
        });
    }


    // . in a operand
    function pointOperandFunct(){
        pointButton.addEventListener('click' , () =>{
            // add . only 1 time if the user has entered the first operand
        if (step==0 || step==1){

           if (!firstOperand.includes("."))  {
               if(firstOperand=="") {
                firstOperand= "0."+ firstOperand;  
                display.value=firstOperand;
               }

                else {
                 firstOperand= firstOperand + ".";
                 display.value=firstOperand;
               } 
            }
        }

    // add . only 1 time if the user has entered the second operand

        if(step==2) {
            if (!secondOperand.includes("."))  {
             if(secondOperand==""){
                secondOperand= "0."+ secondOperand;
                display.value=secondOperand;
             }

             else{
                secondOperand= secondOperand + ".";
                display.value=secondOperand;   
             }   
           }
       }
     });
    }
    
   
    // function to not allow the users to add first and second operand more than 15 chars
    function displayMaxChar () {
        if(firstOperand.length > 15) {
         firstOperand=firstOperand.substring(0, firstOperand.length - 1);
         console.log(firstOperand);
         display.value=firstOperand; 
         window.alert("You can not enter values more than 15 characters.")
        }

        if(secondOperand.length > 15) {
            secondOperand=secondOperand.substring(0, secondOperand.length - 1);
            console.log(secondOperand);
            display.value=secondOperand;
            window.alert("You can not enter values more than 15 characters.")  
        }
    }


    equals.addEventListener("click", getResult);
    clearButton.addEventListener("click", clearResult);

getOperand();
operation();
clearResult();
plusMinusFunction();
pointOperandFunct();
displayMaxChar();
