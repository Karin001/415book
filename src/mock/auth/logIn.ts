import { LogInResponseBodyModel } from '../../providers/auth/auth.service.model'
import {HttpResponse,HttpErrorResponse} from '@angular/common/http'
const LogInResponseBody:LogInResponseBodyModel = {
    success:true,
    errorInfo:'',
    nickName:'张三',
    token:'sdf3sdffaggkgci32412fsdgax',
    avatar:'assets/icon/avatar.png'
    
}
const LogInErrorResponseBody:LogInResponseBodyModel = {
    success:false,
    errorInfo:'登录信息错误',
    nickName:'',
    token:'',
    avatar:''
}
export const LoginResponse = new HttpResponse({
    status:200,
    body:LogInResponseBody
})
export const LogInErrorResponse = new HttpErrorResponse({
    status:503,
    error:LogInErrorResponseBody
})