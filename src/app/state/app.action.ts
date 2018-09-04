export class IndexLoadStart {
  static readonly type = '[home] load-start';
}

export class BookClick {
  static readonly type = '[detail] show-bookdetail';
  constructor(public idbook:string){}
}
