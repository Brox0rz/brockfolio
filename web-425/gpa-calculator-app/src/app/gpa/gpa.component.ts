/**
 * Title: gpa.component.ts
 * Author: Professor Richard Krasso
 * Modified by: Brock Hemsouvanh
 * Date Created: 4/26/2024
 * Date Modified: 05/05/2024
 * Description: GpaComponent for displaying the GPA calculated in the HomeComponent.
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number; // This property will hold the GPA total passed from the HomeComponent.

  constructor() { }

  ngOnInit(): void {
    // Component initialization
  }
}
