import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';


export default class NavigateSession extends NavigationMixin(LightningElement) {
    openZomato(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://www.zomato.com'
            }

        });
    }
    openEPFO(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://passbook.epfindia.gov.in/MemberPassBook/Login'
            }

        });
    }
    openSwiggy(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://www.swiggy.com'
            }

        });
    }

}