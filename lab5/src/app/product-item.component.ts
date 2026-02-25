import { Component, input, output } from '@angular/core';
import { Product } from './product.model.js';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product = input.required<Product>(); //
  delete = output<number>();           //

  like() {
    this.product().likes++; //
  }

  onDelete() {
    this.delete.emit(this.product().id); //
  }

  share() {
    window.open(`https://t.me/share/url?url=${this.product().link}`, '_blank'); //
  }
}