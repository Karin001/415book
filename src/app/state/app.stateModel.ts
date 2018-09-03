interface BookList{

  name:string;
  idbook:string;
  author:string;

  imgurl:string;
}
export interface IndexStateModel{
  bookList:BookList | {};
}
