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
