import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private cartService = inject(CartService);
  sideMenuHidden = signal(true);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu() {
    this.sideMenuHidden.update((prevState) => !prevState);
  }
}
