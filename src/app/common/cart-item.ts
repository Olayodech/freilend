import { Product } from './product';

export class CartItem {
    categoryId: string;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number
    
    constructor(product: Product){
        this.categoryId = product.code;
        this.imageUrl = product.imgUrl;
        this.name = product.name;
        this.price = product.price;
        this.quantity = 1;
    }
}
