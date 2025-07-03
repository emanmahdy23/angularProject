import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductsService {
test:Product[] = [
  {
     
      "name": "Mens Cotton Jacket",
    
      "price": 150,
   
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "onsale": true
      
    },
    {
      
       "name": "Mens Casual Premium Slim Fit T-Shirts",
    
      "price": 350,
      "onsale": true,
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      
    },
    {
        "name": "Mens Cotton Jacket",
    
      "price": 150,
   
      "onsale": true,
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      
    
  },
   {
        "name": "Mens Casual Slim Fit",
    
      "price": 150,
   
      "onsale": true,
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      
    
  }
];
  constructor() { }
}
