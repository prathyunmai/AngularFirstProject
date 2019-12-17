import { Component } from '@angular/core';


@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html'


})

export class productListComponent{

    age:number = 10;
    pagetitle:string = "product List Page";
    isActive:boolean = true;
    imageWidth:number = 150;
    imageMargin:number = 10;
    showImage:boolean = true;
    listFilter:string;

    products:any[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://cdn.pixabay.com/photo/2017/11/03/21/22/rake-2915742_960_720.jpg"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://images.homedepot-static.com/productImages/b2a0e937-99b7-40bb-a567-8b11a2eb63ef/svn/sontax-yard-carts-73599-64_1000.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://image.shutterstock.com/image-vector/colorful-cartoon-claw-hammer-handyman-260nw-1119415058.jpg"
        }
    ]

    toggleImage():void{
        console.log("intial value:",this.showImage);
       this.showImage = !this.showImage;
       console.log("changed value:",this.showImage);
    }
    



}
