import {
    LogInRequstBodyModel,
    SignUpRequesetBodyModel,
    PhoneAuthRequestBodyModel,
    ResetPWRequestBodyModel
} from '../../../providers/auth/auth.service.model'

export class LogIn {
    static readonly type = '[Auth] LogIn Start'
    constructor(
        public formVal: LogInRequstBodyModel,
    ) { }
}
export class LogOut {
    static readonly type = '[Auth] LogOut Start'
}
export class SignUp {
    static readonly type = '[Auth] SignUp Start'
    constructor(
        public formVal: SignUpRequesetBodyModel
    ) { }
}
export class RequestPhoneCode {
    static readonly type = '[Auth] RequestPhoneCode Start'
    constructor(
        public formVal:PhoneAuthRequestBodyModel
    ){}
}
export class ResetPW {
    static readonly type = '[Auth] ResetPW Start'
    constructor(
        public formVal:ResetPWRequestBodyModel
    ){}
}