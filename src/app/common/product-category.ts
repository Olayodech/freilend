export class ProductCategory {

    categoryId: number;
    name: string;
    title: string;
    description: string;
    imgUrl: string;

    constructor(categoryId: number, name: string, title: string, description: string, imgUrl: string){
        this.categoryId = categoryId;
        this.name = name;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl
    }
}
