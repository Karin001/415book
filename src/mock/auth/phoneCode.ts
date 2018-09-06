import { PhoneAuthResponseBodyModel } from '../../providers/auth/auth.service.model'
import {HttpResponse,HttpErrorResponse} from '@angular/common/http'

const PhoneAuthResponseBody:PhoneAuthResponseBodyModel = {
    success:true,
    errorInfo:''
}
const PhoneAuthErrorResponseBody:PhoneAuthResponseBodyModel = {
    success:false,
    errorInfo:'服务器抽风'
}
export const PhoneAuthResponse = new HttpResponse({
    status:200,
    body:PhoneAuthResponseBody
})
export const PhoneAuthErrorResponse = new HttpErrorResponse({
    status:503,
    error:PhoneAuthErrorResponseBody
})