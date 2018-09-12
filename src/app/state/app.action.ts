import {Options,BookDetailRequestBodyModel,BookTypeListRequestBodyModel} from '../../providers/book/book.service.model'

export class IndexLoadStart {
  static readonly type = '[home] load-start';
  constructor(public options:Options){}
}

export class BookClick {
  static readonly type = '[detail] show-bookdetail';
  constructor(public options:Options,public bookDetail:BookDetailRequestBodyModel){}
}

export class LoadBookType {
  static readonly type = '[bookType] load-start';
  constructor(public option:Options,public typeName:BookTypeListRequestBodyModel){}
}
