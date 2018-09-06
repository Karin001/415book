import { CheckPhoneAuthResponseBodyModel } from '../../providers/auth/auth.service.model'
import {HttpResponse,HttpErrorResponse} from '@angular/common/http'

const CheckPhoneAuthResponseBody:CheckPhoneAuthResponseBodyModel = {
    success:true,
    errorInfo:''
}
const CheckPhoneAuthErrorResponseBody:CheckPhoneAuthResponseBodyModel = {
    success:false,
    errorInfo:'验证码错误'
}
export const CheckPhoneAuthResponse = new HttpResponse({
    status:200,
    body:CheckPhoneAuthResponseBody
})
export const CheckPhoneAuthErrorResponse = new HttpErrorResponse({
    status:200,
    error:CheckPhoneAuthErrorResponseBody
})