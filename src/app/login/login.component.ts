import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  authdata?: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder) {
  }
  accountForm: FormGroup;
  ngOnInit(): void {
    this.accountForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  // tslint:disable-next-line: typedef
  submit() {
    console.log(this.accountForm.value);
  }

}
