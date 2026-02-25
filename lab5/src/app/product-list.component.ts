import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="product-grid">
      @for (p of products(); track p.id) {
        <app-product-item [product]="p" (delete)="onRemove($event)"></app-product-item>
      } @empty {
        <p>No products left in this category.</p>
      }
    </div>
  `,
  styles: `.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }`
})
export class ProductListComponent {
  products = input.required<Product[]>(); 
  removeProduct = output<number>();

  onRemove(id: number) {
    this.removeProduct.emit(id);
  }
}