import {Options,BookDetailRequestBodyModel} from '../../providers/book/book.service.model'

export class IndexLoadStart {
  static readonly type = '[home] load-start';
  constructor(public options:Options){}
}

export class BookClick {
  static readonly type = '[detail] show-bookdetail';
  constructor(public options:Options,public bookDetail:BookDetailRequestBodyModel){}
}