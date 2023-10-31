import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem, Item, Orders } from '../models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private cart: CartItem[] = [];
  private itemDetail!: Item;
  private orders!: Orders;
  public cartNumber = new Subject<number>();

  constructor(private readonly httpClient: HttpClient) {}

  setItemDetail = (item: Item) => {
    this.itemDetail = item;
  };

  getItemDetail = () => {
    return this.itemDetail;
  };

  getItemList = () => {
    return this.httpClient.get<Item[]>('../../assets/data.json');
  };

  addItemToCart = (addedCartItem: CartItem) => {
    if (this.cart.length) {
      let isDuplicate = false;
      this.cart.forEach((item, index) => {
        if (item.id === addedCartItem.id) {
          isDuplicate = true;
          this.cart[index] = addedCartItem;
        }
      });
      if (!isDuplicate) {
        this.cart.push(addedCartItem);
      }
    } else {
      this.cart.push(addedCartItem);
    }
    this.cartNumber.next(this.cart.length);
  };

  getCartItem = () => {
    return this.cart;
  };

  removeItemFromCart = (id: number) => {
    this.cart.forEach((item, index) => {
      if (item.id === id) {
        this.cart.splice(index, 1);
      }
    });
    this.cartNumber.next(this.cart.length);
  };

  resetCart = () => {
    this.cart = [];
  };

  setOrders(orders: Orders) {
    this.orders = orders;
  }

  getOrders() {
    return this.orders;
  }
}
