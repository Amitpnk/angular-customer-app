import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

export class Customer {
    CustomerCode: string = "";
    CustomerName: string = "";
    CustomerAmount: number = 0;

    formCustomerGroup: FormGroup = null;

    constructor() {
        let _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({});

        this.formCustomerGroup.addControl("CustomerNameControl",
            new FormControl('', Validators.required));

        var validationCollection = [];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern("^[0-9]{4,4}$"))

        this.formCustomerGroup.addControl("CustomerCodeControl",
            new FormControl('', Validators.compose(validationCollection)));

    }

}
