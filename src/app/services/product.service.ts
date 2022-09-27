import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private baseUrl = "http://localhost:8083/api/v1/products/list_products";
  private categoryUrl = "http://localhost:8083/api/v1/category/list_category";


  constructor(private httpClient: HttpClient) {
      
   }

   getProductList(): Observable<Product[]>{
     return this.httpClient.get<Product[]>(this.baseUrl)
   }

   getProductCategory(categoryName: string): Observable<Product[]>{
    const searchUrl = `${this.baseUrl}/category?category=${categoryName}'`;
    return this.getProducts(searchUrl); 
  }

   getProductCategoryById(categoryId: string): Observable<Product[]>{
    const searchUrl = `${this.baseUrl}/category/param?categoryId=${categoryId}'`;
    console.log(`Calling category by Id Service + ${searchUrl}`)
      return this.getProducts(searchUrl); 
   }

  private getProducts(searchUrl: string): Observable<Product[]> {
    console.log(`search url is ${searchUrl}`);
    return this.httpClient.get<Product[]>(searchUrl);
  }

   listAllCategory(): Observable<ProductCategory[]> {
    const categorysearch = `${this.categoryUrl}`;
    return this.httpClient.get<ProductCategory[]>(categorysearch);
  }

  searchProducts(theKeyword: string): Observable<Product[]>{
    const searchUrl = `${this.baseUrl}/keyword?keyword=${theKeyword}`;
    return this.getProducts(searchUrl); 
  }

  getProductDetails(theProductId: string | null): Observable<Product> {
    const productDetailsUrl =  `${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productDetailsUrl);
  }
  
}
