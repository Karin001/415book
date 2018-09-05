export class LogIn{
    static readonly type = '[Auth] LogIn Start'
    constructor(
        public formVal:{phone:string;password:string},
    ){}
}
export class LogOut{
    static readonly type = '[Auth] LogOut Start' 
}
export class SignUp{
    static readonly type = '[Auth] SignUp Start'
    constructor(
        public formVal:{phone:string;password:string;phoneAuthCode:string}
    ){}
}