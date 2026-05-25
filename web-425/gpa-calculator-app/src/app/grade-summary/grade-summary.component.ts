/**
 * Title: grade-summary.component.ts
 * Author: Professor Richard Krasso
 * Modified by: Brock Hemsouvanh
 * Date Created:04/26/2024
 * Date Modified: 04/28/2024
 * Description: Component for displaying a summary of grades.
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string; // Holds the grade value passed from the parent component.
  @Input() course: string; // Holds the course value passed from the parent component.

  constructor() { }

  ngOnInit(): void {
  }

}
