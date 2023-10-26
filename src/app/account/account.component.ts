import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
	lastName: string | undefined;
	firstName: string | undefined;
	
	valid : boolean = true
	account: any;
	email: string | undefined;
	password: string | undefined;
	city: any;
	phone: any;

	submitForm () {

	}

}
