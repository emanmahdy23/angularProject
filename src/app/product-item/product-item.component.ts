import { Component, input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
readonly param = input<Product>();
}
