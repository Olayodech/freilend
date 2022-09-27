export class Product {

    id: string;
    name: string;
    code: string;
    title: string;
    price: number;
    productCategoryName: string
    imgUrl: string
    description: string

    constructor(id: string, code: string, title: string, price: number, productCategoryName: string, imgUrl: string, description: string, name: string){
        this.id = id;
        this.name = name;
        this.code = code;
        this.title = title;
        this.price = price;
        this.productCategoryName = productCategoryName;
        this.imgUrl = imgUrl;
        this.description = description
    }

}
