import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {

            firstNumber;
            secondNumber;
            @track currentResult;
            @track previousResults=[];
            @track showPrevousResults=false;
            
            numberChangeHandler(event)
            {
               const inputBoxName = event.target.name;
               if(inputBoxName==='firstNumber')
               {
                this.firstNumber=event.target.value;
               }
               else if(inputBoxName==='secondNumber')
               {
                this.secondNumber=event.target.value;
               }
            }

            addHandler(event)
            {
                const FirstN=parseInt(this.firstNumber);
                const SecondN=parseInt(this.secondNumber);
                this.currentResult='Result of '+FirstN+' + '+SecondN+' is '+(FirstN+SecondN);
                this.previousResults.push(this.currentResult);
            }
            subHandler(event)
            {
                const FirstN=parseInt(this.firstNumber);
                const SecondN=parseInt(this.secondNumber);
                this.currentResult='Result of '+FirstN+' - '+SecondN+' is '+(FirstN-SecondN);
                this.previousResults.push(this.currentResult);
            }
            mulHandler(event)
            {
                const FirstN=parseInt(this.firstNumber);
                const SecondN=parseInt(this.secondNumber);
                this.currentResult='Result of '+FirstN+' x '+SecondN+' is '+(FirstN*SecondN);
                this.previousResults.push(this.currentResult);
            }
            divHandler(event)
            {
                const FirstN=parseInt(this.firstNumber);
                const SecondN=parseInt(this.secondNumber);
                this.currentResult='Result of '+FirstN+' / '+SecondN+' is '+(FirstN/SecondN);
                this.previousResults.push(this.currentResult);
            }
            showPreviousResultsToggle(event)
            {
                this.showPrevousResults=event.target.checked;
            }

}