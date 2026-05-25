/**
 * Title: app.component.ts
 * Author: Professor Richard Krasso
 * Modified by: Brock Hemsouvanh on 05/08/2024
 * Date: 4/24/24
 * Description: Component file for managing the application root with navigation and data table functionalities.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    // Initializes the assignment string to the title of the current exercise, showcasing data table functionality.
    this.assignment = 'Welcome to In-N-Out-Books'
  }
}
