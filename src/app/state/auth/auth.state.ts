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
    codeSendedByserver: 0
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
                    this.messageService.presentToast(`获取验证码失败,${responseBody.errorInfo}`, 1000)
                    ctx.patchState({
                        codeSendedByserver: 0
                    })
                } else {
                    const count = ctx.getState().codeSendedByserver
                    ctx.patchState({
                        codeSendedByserver: count + 1
                    })
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