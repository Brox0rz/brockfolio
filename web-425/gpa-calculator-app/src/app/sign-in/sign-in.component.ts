/**
 * Title: sign-in.component.ts
 * Author: Professor Richard Krasso
 * Modified by: Brock Hemsouvanh
 * Date: 05/05/2024
 * Description: Component for handling user sign-in. Manages the authentication form and navigates based on authentication success.
 */

import { Router } from '@angular/router';
import { SignInService } from './sign-in.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup; // FormGroup to manage the sign-in form data.
  errorMessage: string; // String to store error messages.

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService
  ) {}

  /**
   * Initializes the component by setting up the form group for the sign-in process,
   * including validators to ensure the student ID is numeric and required.
   */
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    });
  }

  // Getter to access the form controls from the template
  get form() {
    return this.signinForm.controls;
  }

  /**
   * Handles form submission. Validates the student ID, sets a session cookie if valid,
   * and navigates to the home page. Displays an error message if the student ID is invalid.
   */
  onSubmit(): void {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId, 10);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'The student ID you entered is invalid. Please try again.';
    }
  }
}
