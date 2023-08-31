import { Component } from '@angular/core';
import productData from '../../product.json';

interface Product {
  name: String;
  description: String;
  price: Number;
  imageUrl: any;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = productData;
}
