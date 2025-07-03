import { Component } from '@angular/core';
import { Slider } from '../slider';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-hero',
  imports: [CarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
products: Slider[] = [
  
  {
     
     
    
      "price": 150,
   
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
     
      
    },
    {
      
      
    
      "price": 350,
      
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      
    },
    {
       
    
      "price": 150,
   
      
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      
    
  },
   {
        
    
      "price": 150,
   
      
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      
    
  }
]
}
