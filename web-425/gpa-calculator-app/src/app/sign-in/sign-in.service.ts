/**
 * Title: sign-in.service.ts
 * Author: Professor Richard Krasso
 * Modified by: Brock Hemsouvanh
 * Date: 05/04/2024
 * Description: Service for handling sign-in operations in the GPA Calculator App.
 *              This service manages student authentication by checking if an entered student ID is valid.
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    // List of valid student IDs for authentication
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }

   validate(studentId: number) {
    // Validates if the provided studentId is in the list of registered student IDs.
    return this.studentIds.some(id => id === studentId);
   }
}
