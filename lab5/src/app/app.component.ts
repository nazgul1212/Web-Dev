import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component.js';
import { Product } from './product.model.js';
import { Category } from './category.model.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Gaming' },
    { id: 4, name: 'Accessories' }
  ];

  selectedCategoryId: number | null = null;

  products: Product[] = [
    // Smartphones (ID: 1)
    {id: 1, categoryId: 1, likes: 0, name: 'iPhone 15 Pro', price: 677900, rating: 4.9, description: 'Титановый корпус.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/hcc/86302547869726.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h2d/hcc/86302547869726.jpg'], link: 'https://kaspi.kz' },

    
    // Laptops (ID: 2)
    {id: 6, categoryId: 2, likes: 0, name: 'MacBook Pro M3', price: 1200000, rating: 5.0, description: 'Мощный чип.', image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg'], link: 'https://kaspi.kz' },
    {id: 3, categoryId: 3,likes: 0, name: 'Sony PlayStation 5', price: 303582, rating: 5.0 ,description: 'Игровая консоль нового поколения.',image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'},
    {id: 5,categoryId: 1,likes:0, name: 'Samsung Galaxy S24 Ultra', price: 633740, rating: 4.9, description: 'Смартфон с ИИ и 200 Мп камерой.',image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h44/84963226419230.png?format=gallery-medium',link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-fioletovyi-116043643/?c=750000000'},
    {id: 8,categoryId:3,likes:0, name: 'Xiaomi Mi Band 7', price: 15900, rating: 4.7,description: 'Фитнес-браслет с AMOLED экраном.',image: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=gallery-medium',link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000'},
    {id: 6,categoryId:2,likes:0,name: 'iPad Air 2022', price: 359000, rating: 4.8,description: 'Планшет на чипе M1.',image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/ha3/86369746485278.png?format=gallery-medium',link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-fioletovyi-104235630/?c=750000000'},
    {id: 16,categoryId: 4,name: 'Apple Watch Series 9 45 мм черный',description: 'Умные часы с мощным процессором S9 и ярким дисплеем Always-On.',price: 195000,rating: 4.9,likes: 0,image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000'},
    {id: 17,categoryId: 4,name: 'Зарядное устройство Apple 20W USB-C Power Adapter',description: 'Адаптер питания для быстрой зарядки iPhone и iPad.',price: 8500,rating: 4.8,likes: 0,image: 'https://resources.cdn-kaspi.kz/img/m/p/h84/hd8/64039078559774.jpg?format=gallery-medium',link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-apple-usb-c---lightning-1-m-101103131/?c=750000000'
},
{
  id: 18,
  categoryId: 4,
  name: 'Чехол Apple MagSafe для iPhone 15 Pro Max прозрачный',
  description: 'Стильный чехол с поддержкой магнитной зарядки MagSafe.',
  price: 24000,
  rating: 4.7,
  likes: 0,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/ha1/h50/83746470821918.jpg?format=gallery-medium',
  link: 'https://kaspi.kz/shop/p/chehol-aat-dlja-apple-iphone-15-prozrachnyi-113288546/?c=750000000'
},
{
  id: 19,
  categoryId: 4,
  name: 'Метка-трекер Apple AirTag 1 шт',
  description: 'Компактный трекер для поиска ключей, сумок и других вещей через локатор.',
  price: 15500,
  rating: 5.0,
  likes: 0,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h44/64238812921886.jpg?format=preview-large',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/h0d/h28/64104257126430.jpg?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/apple-airtag-belyi-101522198/?c=750000000'
},
{
  id: 20,
  categoryId: 4,
  name: 'Стилус Apple Pencil 2nd Generation',
  description: 'Инструмент для рисования и заметок на iPad с беспроводной зарядкой.',
  price: 58000,
  rating: 4.9,
  likes: 0,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/hb0/84651070095390.jpg?format=preview-large',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h2a/63811100278814.jpg?format=gallery-medium'],
  link: 'https://kaspi.kz/shop/p/stilus-apple-pencil-usb-c-belyi-115132829/?c=750000000'
 }
 ];

  selectCategory(id: number) {
    this.selectedCategoryId = id; //
  }

  get filteredProducts() {
    return this.products.filter(p => p.categoryId === this.selectedCategoryId); //
  }

  handleDelete(productId: number) {
    this.products = this.products.filter(p => p.id !== productId); //
  }
}