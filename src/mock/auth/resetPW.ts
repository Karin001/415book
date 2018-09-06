import { ResetPWResponseBodyModel } from '../../providers/auth/auth.service.model'
import {HttpResponse,HttpErrorResponse} from '@angular/common/http'

const ResetPWResponseBody:ResetPWResponseBodyModel = {
    success:true,
    token:'sdfsdf738947dhfj332fds2342',
    errorInfo:''
}
const ResetPWErrorResponseBody:ResetPWResponseBodyModel = {
    success:false,
    token:'',
    errorInfo:'服务器抽风'
}
export const ResetPWResponse = new HttpResponse({
    status:200,
    body:ResetPWResponseBody
})
export const ResetPWErrorResponse = new HttpErrorResponse({
    status:503,
    error:ResetPWErrorResponseBody
})