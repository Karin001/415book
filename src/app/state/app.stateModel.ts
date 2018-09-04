interface BookListUnit{

  name:string;
  idbook:string;
  author:string;

  imgurl:string;
}
interface BookListType{
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
