import { State, Selector, StateContext, Action } from '@ngxs/store';
import { LogIn, LogOut, SignUp, RequestPhoneCode, ResetPW } from './auth.action'
import { AuthStateModel } from './auth.stateModel'
import { messageService } from '../../../providers/message/message.service'
import { AuthProvider } from '../../../providers/auth/auth.service'
import { tap } from 'rxjs/operators';
const defalutState = {
    logged: false,
    nickName: '',
    avatar: 'assets/icon/avatar/png',
    resetedPWSuccess: false,
    codeSendedByserver: 0,
    codeButtonName:'获取验证码',
    codeButtonDisabled:false
}
@State<AuthStateModel>({
    name: 'Auth',
    defaults: defalutState
})
export class AuthState {
    @Selector() static logged(state: AuthStateModel) {
        return state.logged
    }
    @Selector() static nickName(state: AuthStateModel) {
        return state.nickName
    }
    @Selector() static avatar(state: AuthStateModel) {
        return state.avatar
    }
    @Selector() static sendPhoneCode(state: AuthStateModel) {
        return state.codeSendedByserver
    }
    @Selector() static codeButtonName(state: AuthStateModel) {
        return state.codeButtonName
    }
    @Selector() static codeButtonDisabled(state: AuthStateModel) {
        return state.codeButtonDisabled
    }
    
    constructor(
        private authService: AuthProvider,
        public messageService: messageService
    ) { }
    @Action(LogIn)
    logIn(ctx: StateContext<AuthStateModel>, action: LogIn) {
        return this.authService.logIn(action.formVal).pipe(
            tap(responseBody => {
                if (!responseBody.success) {
                    this.messageService.presentToast(`登录失败，${responseBody.errorInfo}`, 1000)
                } else {
                    this.authService.saveAuthToken(responseBody.token)
                    ctx.patchState({
                        avatar: responseBody.avatar,
                        nickName: responseBody.nickName,
                        logged: true
                    })
                }
            })
        )
    }

    @Action(SignUp)
    signUp(ctx: StateContext<AuthStateModel>, action: SignUp) {
        return this.authService.signUp(action.formVal).pipe(
            tap(responseBody => {
                if (!responseBody.success) {
                    this.messageService.presentToast(`注册失败,${responseBody.errorInfo}`, 1000)
                } else {
                    this.authService.saveAuthToken(responseBody.token)
                    ctx.patchState({
                        logged: true
                    })
                }
            })
        )
    }
    @Action(RequestPhoneCode)
    requestPhoneCode(ctx: StateContext<AuthStateModel>, action: RequestPhoneCode) {
        return this.authService.getPhoneCode(action.formVal).pipe(
            tap(responseBody => {
                if (!responseBody.success) {
                    this.messageService.presentToast(`获取验证码失败,${responseBody.errorInfo}`, 2000)
                    
                    ctx.patchState({
                        codeSendedByserver: 0,
                        codeButtonDisabled:false,
                        codeButtonName:responseBody.errorInfo+',请重试'
                    })

                } else {
                    const count = ctx.getState().codeSendedByserver
                    let timeCount = 6;
                    ctx.patchState({
                        codeSendedByserver: count + 1,
                        codeButtonDisabled: true,
                        codeButtonName:`${timeCount}秒后可重新获取`
                    })
                    
                    const kk = setInterval(() => {
                        if (timeCount === 0) {
                          window.clearInterval(kk);
                          timeCount = null;
                        ctx.patchState({
                            codeButtonDisabled:false,
                            codeButtonName: '获取验证码'
                        })
                          return;
                        }
                        timeCount--;
                        ctx.patchState({
                            codeButtonName:`${timeCount}秒后可重新获取`
                        })
            
                      }, 1000)
                    
                }
            })
        )
    }
    @Action(ResetPW)
    resetPW(ctx: StateContext<AuthStateModel>, action: ResetPW) {
        return this.authService.resetPW(action.formVal).pipe(
            tap(responseBody => {
                if (!responseBody.success) {
                    this.messageService.presentToast(`密码重置错误,${responseBody.errorInfo}`, 1000)
                    ctx.patchState({
                        resetedPWSuccess: false
                    })
                } else {
                    ctx.patchState({
                        resetedPWSuccess: true
                    })
                }
            })
        )
    }
    @Action(LogOut)
    LogOut(ctx: StateContext<AuthStateModel>, action: LogOut) {
        this.authService.deleteAuthToken().then(
            ctx.setState(defalutState)
        )
    }

}