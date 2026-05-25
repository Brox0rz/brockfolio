/**
 * Title: book-list.component.ts
 * Authors: Professor Richard Krasso and Brock Hemsouvanh
 * Date: 4/21/2024
 * Modified: 05/08/2024
 * Description: Book List component to display and interact with a list of books.
 */

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from '../books.service'; // Service to handle book data operations
import { IBook } from '../book.interface'; // Interface representing a book
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: IBook[] = []; // Array to hold the books data
  loading = true; // Boolean to show/hide the loading spinner
  book: IBook | null = null; // Variable to hold book details for the dialog

  constructor(private booksService: BooksService, private dialog: MatDialog) {}

  //On initialization, fetch the books data from the service.
  ngOnInit(): void {
    this.booksService.getBooks().subscribe((res: any) => {

      // Process the API response
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          const bookDetails = res[key].details;

          // Push each book object into the books array
          this.books.push({
            isbn: bookDetails.isbn_13 ? bookDetails.isbn_13[0] : bookDetails.isbn_10[0] || 'N/A',
            title: bookDetails.title || 'N/A',
            description: bookDetails.subtitle || 'N/A',
            numOfPages: bookDetails.number_of_pages || 0,
            authors: bookDetails.authors ? bookDetails.authors.map((author: any) => author.name) : []
          });
        }
      }

      // Stop loading after fetching data
      this.loading = false;
    });
  }

  // Function to show book details based on ISBN and open the details dialog.
  showBookDetails(isbn: string): void {
    this.book = this.books.find(b => b.isbn === isbn) || null;
    console.log(this.book); // Log the book details to verify the service is returning correct data

    if (this.book) {
      const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
        data: { book: this.book },
        disableClose: true,
        width: '800px'
      });

      // Reset the book variable after closing the dialog
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'confirm') {
          this.book = null;
        }
      });
    }
  }
}
