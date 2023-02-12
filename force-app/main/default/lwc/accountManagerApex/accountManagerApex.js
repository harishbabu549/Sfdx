import { LightningElement,track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManagerApex extends LightningElement {

    @track numberOfRecords;
    @track accounts;
    
    get responseReceived()
    {
        if(this.accounts)
        {
            return true;
        }
        return false;
    }

    numberOfAccountsHandler(event)
    {
        this.numberOfRecords=event.target.value;
    }

    getAccounts()
    {
        getAllAccounts({numberOfRecords:this.numberOfRecords}).then(response=>{
                this.accounts=response;

               this.toastEvent=new ShowToastEvent({

                    title:'Accounts loaded',
                    message:this.numberOfRecords+'Accounts is/are fetched',
                    variant:'success'

                });
                this.dispatchEvent(toastEvent);

        }).catch(error=>{
            console.error('Erron in fetching ',error.body.message);

            this.toastEvent=new ShowToastEvent({

                title:'ERROR',
                message:error.body.message,
                variant:'error'

            });
            this.dispatchEvent(toastEvent);
        
        })
    }
}
