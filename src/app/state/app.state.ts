import {State,Action,StateContext,Selector} from '@ngxs/store'
import {IndexStateModel,BookDetailStateModel,BookTypeStateModel} from './app.stateModel'
import {IndexLoadStart,BookClick,LoadBookType,ScrollLoadMore} from './app.action'
import { BookService } from '../../providers/book/book.service'
import { messageService } from '../../providers/message/message.service'
import {tap} from 'rxjs/operators'

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
    return this.bookService.getIndexBookList(action.options).pipe(
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
    return this.bookService.getBookDetail(action.options,action.bookDetail).pipe(
      tap(bookDetailResbody => {
        console.log('bookdetailres',bookDetailResbody)
        ctx.setState({bookDetail:bookDetailResbody.bookDetail})
      })
    )
  }
}

@State<BookTypeStateModel>({
  name:'bookType',
  defaults:{
    bookType:{typeName:'',books:[]}
  }
})
export class BookTypeState{
  @Selector() static bookType(state:BookTypeStateModel) {
    return state.bookType
  }
  constructor(
    public bookService:BookService,
    public messageService:messageService
  ){}
  @Action(LoadBookType)
  loadBookType(ctx:StateContext<BookTypeStateModel>,action:LoadBookType){
    return this.bookService.getBookTypeList(action.option,action.typeName).pipe(
      tap(bookTypeResbody => {

        if(bookTypeResbody.success) {
          ctx.setState({
            bookType:bookTypeResbody.bookTypeList
          })
        }else {
          this.messageService.presentToast(bookTypeResbody.errorInfo,2000)
        }

      })
    )
  }
  @Action(ScrollLoadMore)
  scrollLoad(ctx:StateContext<BookTypeStateModel>,action:ScrollLoadMore){
    return this.bookService.getBookTypeList(action.option,action.typeName).pipe(
      tap(bookTypeResbody => {

        if(bookTypeResbody.success) {
          const books = [...ctx.getState().bookType.books,...bookTypeResbody.bookTypeList.books]
          const typeName = ctx.getState().bookType.typeName
          ctx.setState({
            bookType:{typeName,books}
          })
        }else {
          this.messageService.presentToast(bookTypeResbody.errorInfo,2000)
        }

      })
    )
  }

  }

