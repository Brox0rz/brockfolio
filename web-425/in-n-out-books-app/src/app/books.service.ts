/**
 * Title: books.service.ts
 * Authors: Professor Richard Krasso and Brock Hemsouvanh
 * Date: 4/21/2024
 * Modified: 5/8/2024
 * Description: Service for managing book data with functions to fetch all books or a specific book by ISBN using the Open Library API.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Import Observable operator from rxjs
import { HttpClient, HttpParams } from '@angular/common/http'; // Import HttpClient and HttpParams
import { IBook } from './book.interface'; // Import the IBook interface

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // Array of ISBNs to be used for fetching books
  private readonly isbns: string[] = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];

  constructor(private http: HttpClient) {}

  /**
   * Fetches the books data from Open Library API.
   * @returns {Observable<any>} - An observable containing the API response.
   */
  getBooks(): Observable<any> {
    // Prepare HttpParams for the Open Library API request
    let params = new HttpParams()
      .append('bibkeys', `ISBN:${this.isbns.join(',ISBN:')}`)
      .append('format', 'json')
      .append('jscmd', 'details');

    // Fetch data using HttpClient's GET method
    return this.http.get('https://openlibrary.org/api/books', { params });
  }
}
