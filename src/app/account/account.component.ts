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
email: any;
password: any;
city: any;
phone: any;

	submitForm () {

	}

}
