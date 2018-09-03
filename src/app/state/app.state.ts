import {State,Action,StateContext,Selector} from '@ngxs/store'
import {IndexStateModel} from './app.stateModel'
import {IndexLoadStart} from './app.action'

@State<IndexStateModel>({
  name:'app',
  defaults:{bookList:{}}
})
export class AppState{
  constructor(){

  }
  @Action(IndexLoadStart)
  loadIndexBookList(ctx:StateContext<IndexStateModel>,action:IndexLoadStart){

  }
}
