/**
 * Title: book-details-dialog.component.ts
 * Authors: Professor Richard Krasso and Brock Hemsouvanh
 * Date: 4/21/2024
 * Modified: 05/08/2024
 * Description: Book Details component to display and interact with the book details.
 */

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent {

  book: IBook; // Variable to hold the book data passed from the parent component

  constructor(
    public dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Injects data passed via MatDialog's `data` property
  ) {
    // Initialize the `book` variable with the data passed from the parent component
    this.book = data.book;
  }
}
