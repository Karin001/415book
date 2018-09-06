 export interface Options {
    Cachable:boolean; // 是否允许使用缓存
    x_refresh:boolean; // 是否允许先使用缓存后再次更新来自远端的数据
    CacheProperty?:string; //缓存名字
 }
 
 interface BookElement {
    name:string;
    idbook:string;
    author:string;
    imgurl:string
 }
 interface BookListElement {
    typeName:string;
    books:BookElement[];
}
export interface BookListResponseBodyModel {
    bookList:BookListElement[]; //一个字典对象的数组
    success:boolean;
}

interface BookDetail {
    bookdescription:string;
    bookname:string;
    bookyear:string;
    bookauth:string;
    bookprice:number;
    imgurl:string;
    dir:string[]; // 章节目录，是一个字符串数组
    package:string; // 包装 比如：平装
    version:string; // 版次
    publisher:string; // 出版方
    page:number; // 页数
    wordsNum:number; // 字数
    kaiben:string; // 开本，比如：16开
}
export interface BookDetailRequestBodyModel {
    idbook:string;
}
export interface BookDetailResponseBodyModel {
    bookDetail:BookDetail;
    success:boolean;
}

export interface BookTypeListRequestBodyModel {
    typeName:string;
// 可能的值：    
// - 'hot' 最热门图书 
// - 'new' 新到图书
// - 'literature'  文学
// - 'art' 艺术
// - 'history' 历史
// - 'foreign' 外文
// - 'science_technology' 科学与技术
// - 'child' 儿童
// - 'society' 社会
// - 'sports' 运动
// - 'life' 生活
// - 'recommend' 猜你喜欢
}
interface BookElemnet2 {
    name:string;
    idbook:string;
    author:string;
    imgurl:string;
    description:string // 简介
}
interface BookTypeList {
    typeName:string;
    books:BookElemnet2[]
}
export interface BookTypeListResponseBodyModel {
    bookTypeList:BookTypeList;
    success:boolean;
}