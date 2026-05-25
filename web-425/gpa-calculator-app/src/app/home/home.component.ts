/**
 * Title: home.component.ts
 * Author: Professor Richard Krasso
 * Modified by: Brock Hemsouvanh
 * Date Created: 04/28/2024
 * Date Modified: 05/05/2024
 * Description: Home component for the GPA Calculator application. This component manages the user interactions
 *              within the home page of the app. It includes functions for handling form submissions, grade calculations,
 *              and maintaining a list of transcript entries using reactive forms.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transcriptForm: FormGroup;
  transcriptEntries: ITranscript[] = [];
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  gpaTotal: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

  // Getter to access form controls in the template
  get form() {
    return this.transcriptForm.controls;
  }

  onSubmit(event: Event): void {
    this.transcriptEntries.push({
        course: this.form.course.value,
        grade: this.form.grade.value
    });
    this.calculateResults();  // Recalculate GPA after adding new entry

    // Cast the currentTarget to HTMLFormElement to access the reset method (this is for strict mode)
    (event.currentTarget as HTMLFormElement).reset();
}

  calculateResults(): void {
    let totalGpa = 0;
    this.transcriptEntries.forEach(entry => {
      totalGpa += this.convertGradeToPoints(entry.grade);
    });
    this.gpaTotal = this.transcriptEntries.length > 0 ? totalGpa / this.transcriptEntries.length : 0;
  }

  private convertGradeToPoints(grade: string): number {
    const points = {
      'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0,
      'D-': 0.7, 'F': 0
    };
    return points[grade] || 0;  // Default to 0 if the grade is not found
  }

   // Clears all transcript entries and resets the total GPA to zero.
  clearEntries(): void {
    this.transcriptEntries = []; // Clear the array of transcript entries
    this.gpaTotal = 0; // Reset the GPA total
  }
}
