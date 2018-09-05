import {State,Selector,StateContext,Action} from '@ngxs/store';
import {LogIn,LogOut,SignUp} from './auth.action'
import {AuthStateModel} from './auth.stateModel'
import {messageService, messageService} from '../../../providers/message/message.service'
import {AuthProvider} from '../../../providers/auth/auth' 
import { tap } from 'rxjs/operators';
@State<AuthStateModel>({
    name:'Auth',
    defaults:{
        logged:false,
        remenberMe:false,
        nickName:'',
        avatar:'assets/icon/avatar/png'
    }
}) 
export class AuthState{
    @Selector() static logged(state:AuthStateModel){
        return state.logged
    }
    @Selector() static remenberMe(state:AuthStateModel){
        return state.remenberMe
    }
    @Selector() static nickName(state:AuthStateModel){
        return state.nickName
    }
    @Selector() static avatar(state:AuthStateModel){
        return state.avatar
    }
    constructor(
        private authService: AuthProvider,
        public messageService: messageService
    ){}
    @Action(LogIn)
    LogIn(ctx:StateContext<AuthStateModel>,action:LogIn){
        return this.authService.logIn(action.formVal).pipe(
            tap(resbody=>{
                if(!resbody){
                    this.messageService.presentToast('登录失败，请重试',1000)
                } else{
                    if(resbody['token']) {
                        this.authService.saveAuthToken(resbody['token'])
                    }
                }
            })
        )
    } 
}