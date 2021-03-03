import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  accountForm = this.fb.group({
    username: new FormControl(''),
    password: new FormControl('')
  });
  ngOnInit(): void {

  }
  // tslint:disable-next-line: typedef
  submit() {
    console.log(this.accountForm.value);
  }

}
