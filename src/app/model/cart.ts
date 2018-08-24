export interface CartBook {
    bookid:string;
    name: string;
    author:string;
    imgSrc: string;
    nums: string;
    price: string;
    publisher: string;
    version: string;
}
export class CartBooks {
    cartBooks:CartBook
}
