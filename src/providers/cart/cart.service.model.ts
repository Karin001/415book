export interface CartGoodsModel {
    idbook:string;
    name:string;
    author:string;
    imgurl:string;
    nums:number; //该本书购物车内数量
    price:number; //单价
    publisher:string; //出版方
    version:string; //版次
}
export interface CartGoodsResponseBodyModel {
    success:boolean;
    errorInfo:string;
    cartGoods:CartGoodsModel
}