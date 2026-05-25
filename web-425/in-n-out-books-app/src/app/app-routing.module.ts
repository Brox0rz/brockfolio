/**
 * Title: app-routing.module.ts
 * Author: Brock Hemsouvanh and Professor Richard Krasso
 * Date: 4/20/2024
 * Modified by: Brock hemsouvanh 04/24/2024
 * Description: Routing module for the In-N-Out Books application.
 *              This module handles the navigation paths for the application.
 */

// Importing core Angular modules for routing and component management
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// Definition of routes for the application
const routes: Routes = [
  {
    path: '', // Default route
    component: BookListComponent // Directs to the Book List component
  },
  {
    path: 'book-list', // Route for the book list page
    component: BookListComponent // Directs to the Book List component
  },
  {
    path: 'contact', // Route for the contact page
    component: ContactComponent // Directs to the Contact component
  },
  {
    path: 'about', // Route for the about page
    component: AboutComponent // Directs to the About component
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
];

// Angular module decorator with imported and exported RouterModule
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuring the router at the application's root level
  exports: [RouterModule] // Makes RouterModule available throughout the application
})
export class AppRoutingModule { }
