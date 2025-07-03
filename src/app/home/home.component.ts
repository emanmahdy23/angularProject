import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsService } from '../products.service';
import { Product } from '../product';



@Component({
  selector: 'app-home',
    providers: [ProductsService],
  imports: [NavbarComponent,HeroComponent,FooterComponent, ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products:Product[] = [];
  constructor(private _productsService: ProductsService) {
  this.products = this._productsService.test;
  }

}
