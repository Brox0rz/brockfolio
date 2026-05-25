/**
 * Title: wishlist.component.ts
 * Authors: Professor Richard Krasso and Brock Hemsouvanh
 * Date: 4/24/2024
 * Description: Wishlist component to display and interact with a wishlist of books.
 */
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];
  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
