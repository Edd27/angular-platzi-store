import { computed, Injectable, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() =>
    this.cart().reduce((acc, curr) => acc + curr.price, 0)
  );

  constructor() {}

  addToCart(product: Product) {
    this.cart.update((currentCart) => [...currentCart, product]);
  }
}
