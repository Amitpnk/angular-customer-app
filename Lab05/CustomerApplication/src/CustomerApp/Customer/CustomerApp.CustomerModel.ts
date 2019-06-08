import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

export class Customer {
    CustomerCode: string;
    CustomerName: string;
    CustomerAmount: number;

    formCustomerGroup: FormGroup = null;

    constructor() {
        const builder = new FormBuilder();
        this.formCustomerGroup = builder.group({});

        this.formCustomerGroup.addControl('CustomerNameControl', new FormControl('', Validators.required));
        // this.formCustomerGroup.addControl('CustomerCodeControl', new FormControl('', Validators.required));

        const ValidationCollection = [];
        ValidationCollection.push(Validators.required);
        // tslint:disable-next-line: quotemark
        ValidationCollection.push(Validators.pattern("^[0-9]{4,4}$"));


        this.formCustomerGroup.addControl('CustomerCodeControl',
            new FormControl('', Validators.compose(ValidationCollection)));

    }

}

