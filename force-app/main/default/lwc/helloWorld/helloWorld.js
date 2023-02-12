import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track greeting='world';

    dynamicGreetingValue(event){
        this.greeting=event.target.value;
    }

}