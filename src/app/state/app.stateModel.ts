interface BookListUnit{

  name:string;
  idbook:string;
  author:string;
  imgurl:string;
  description?:string // 简介 首页数据不需要 分类列表数据需要
}
export interface BookListType{
  typeName:string;
  books:BookListUnit[];
}
export interface IndexStateModel{
  bookList:BookListType[] | [{}];
}

//
interface BookDetail{
  bookdescription:string;
  bookname:string;
  bookyear:string;
  bookauth:string;
  bookprice:number;
  imgurl:string;
}
export interface BookDetailStateModel{
  bookDetail:BookDetail | {}
}
export interface BookTypeStateModel{
  bookType:BookListType | {}
}
