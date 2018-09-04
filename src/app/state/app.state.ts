import {State,Action,StateContext,Selector} from '@ngxs/store'
import {IndexStateModel,BookDetailStateModel} from './app.stateModel'
import {IndexLoadStart,BookClick} from './app.action'
import { BookService } from '../../providers/book/book.service'
import {tap,catchError} from 'rxjs/operators'
import {of} from 'rxjs/observable/of'
@State<IndexStateModel>({
  name:'app',
  defaults:{
    bookList:[{}]
  }
})
export class AppState{
  @Selector() static bookList(state:IndexStateModel){
    return state.bookList
  }
  constructor(
    public bookService:BookService
  ){

  }
  @Action(IndexLoadStart)
  loadIndexBookList(ctx:StateContext<IndexStateModel>,action:IndexLoadStart){
    return this.bookService.getIndexBookList({Cachable:'true',x_refresh:'true'}).pipe(
      tap(indexBookList =>{
        ctx.setState(indexBookList)
      })
    )
  }
}

@State<BookDetailStateModel>({
  name:'bookDetail',
  defaults:{
    bookDetail:{}
  }
})
export class BookDetailState{
  @Selector() static bookDetail(state:BookDetailStateModel){
    return state.bookDetail
  }
  constructor(
    public bookService:BookService
  ){}
  @Action(BookClick)
  bookclick(ctx:StateContext<BookDetailStateModel>,action:BookClick){
    return this.bookService.getBookDetail({Cachable:'false',x_refresh:'false',idbook:action.idbook}).pipe(
      tap(bookDetail => {
        ctx.setState(bookDetail)
      })
    )
  }
}
