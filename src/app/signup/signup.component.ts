import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    mobno: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
    });
    matcher = new MyErrorStateMatcher(); 
  constructor() { }

  ngOnInit() {
  }
}
