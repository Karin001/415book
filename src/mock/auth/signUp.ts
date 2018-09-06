import { SignUpResponseBodyModel } from '../../providers/auth/auth.service.model'
import {HttpResponse,HttpErrorResponse} from '@angular/common/http'

const SignUpResponseBody:SignUpResponseBodyModel = {
    token:'sdfjkdjf324gfja32332jak4u823',
    success:true,
    errorInfo:''
} 
const SignUpErrorResponseBody:SignUpResponseBodyModel = {
    token:'',
    success:false,
    errorInfo:'验证信息不符'
}
export const SignUpResponse = new HttpResponse({
    status:200,
    body:SignUpResponseBody
})
export const SignUpErrorResponse = new HttpErrorResponse({
    status:503,
    error:SignUpErrorResponseBody
})