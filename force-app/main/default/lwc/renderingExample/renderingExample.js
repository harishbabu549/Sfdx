import { LightningElement,track } from 'lwc';

export default class RenderingExample extends LightningElement {

    @track statusElement=false;

    @track citi=['mumbai','pune','chennai','hyderabad','bangalore'];

    showDivHandler(event)
    {
        this.statusElement= event.target.checked;
    }

}