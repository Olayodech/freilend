import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategory } from './common/product-category';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCategoryMenuComponent } from './components/products/product-category-menu/product-category-menu.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

const routes: Routes = [
  {path: 'product/cart', component: CartDetailsComponent},
  {path: 'product/product_details/:id', component:ProductDetailsComponent},
  {path: 'product/search/:keyword', component: ProductListComponent},
  {path: 'products', component: ProductListComponent}, 
  {path: 'category', component: ProductListComponent},
  {path: 'category/:name', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
