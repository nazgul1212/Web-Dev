import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 Pro 128Gb',
      description: 'Флагманский смартфон с титановым корпусом и мощным процессором A17 Pro.',
      price: 677900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/hcc/86302547869726.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h2d/hcc/86302547869726.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/hcc/h01/86319878570014.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h12/h9f/86319878701086.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-belyi-113138220/?c=750000000'
    },
    {
        id: 2,
        name: 'Ноутбук Apple MacBook Pro M5  512Gb/24Gb/16.2 ',
        description: 'Apple Macbook Pro 16.2 - это мощный и стильный ноутбук для профессионалов,которым нужна максимальная производительность.',
        price: 1323838,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=gallery-medium',
             'https://resources.cdn-kaspi.kz/img/m/p/p9a/p44/15673151.png?format=gallery-medium', 
             'https://resources.cdn-kaspi.kz/img/m/p/p62/p44/15673153.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-24-gb-ssd-512-gb-macos-mx2h3-137220149/?c=750000000'
    },
    {
      id: 3, name: 'Sony PlayStation 5', price: 303582, rating: 5.0, 
      description: 'Игровая консоль нового поколения.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
         'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium', 
         'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 4, name: 'Dyson Airwrap Multi-styler', price: 292027, rating: 4.7, 
      description: 'Стайлер для разных типов волос.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/ha4/87249568825374.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h63/ha4/87249568825374.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hca/he8/87249568890910.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/he5/hc9/87249568956446.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/dyson-hs08-airwrap-complete-long-stailer-rozovyi-bronzovyi-124098877/?c=750000000'
    },
    {
      id: 5, name: 'Samsung Galaxy S24 Ultra', price: 633740, rating: 4.9, 
      description: 'Смартфон с ИИ и 200 Мп камерой.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h44/84963226419230.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h76/h44/84963226419230.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h5e/84963576250398.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hca/h67/84963576348702.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-fioletovyi-116043643/?c=750000000'
    },
    {
      id: 6, name: 'iPad Air 2022', price: 359000, rating: 4.8, 
      description: 'Планшет на чипе M1.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/ha3/86369746485278.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1e/ha3/86369746485278.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hee/h22/86369746550814.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h15/he6/86369746583582.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-fioletovyi-104235630/?c=750000000'
    },
    {
      id: 7, name: 'Фотокамера Sony ZV-E10 II Kit 16-50 mm', price: 568351, rating: 5.0, 
      description: 'Sony ZV-E10 II с улучшенными функциями, которые расширяют возможности его предшественника, ориентированного на создание контента, разработанном для видеоблогеров',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hc9/86635299897374.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hc9/86635299897374.jpg?format=gallery-medium',
         'https://resources.cdn-kaspi.kz/img/m/p/hd6/h70/86635299962910.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5b/hcf/86635300225054.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sony-zv-e10-ii-kit-16-50-mm-121871825/?c=750000000'
    },
    {
      id: 8, name: 'Xiaomi Mi Band 7', price: 15900, rating: 4.7, 
      description: 'Фитнес-браслет с AMOLED экраном.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=gallery-medium',
         'https://resources.cdn-kaspi.kz/img/m/p/hdd/hb1/65114261323806.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000'
    },
    
  ];

  share(product: Product) {
    const message = encodeURIComponent(`Check out this product: ${product.link}`);
    const url = `https://t.me/share/url?url=${message}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }
}