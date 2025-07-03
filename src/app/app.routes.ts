import { Routes } from '@angular/router';

export const routes: Routes = [

{path:"about",loadComponent:()=>import('./about/about.component').then(m=>m.AboutComponent)},
{path:"products",loadComponent:()=>import('./product-list/product-list.component').then(m=>m.ProductListComponent)},
{path:"home",loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"contact",loadComponent:()=>import('./contact/contact.component').then(m=>m.ContactComponent)},



];
