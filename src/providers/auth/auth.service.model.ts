export interface LogInRequstBodyModel {
    phone:string; //电话号码
    password:string
}
export interface LogInResponseBodyModel {
    token:string; // 返回的token前端会存储起来，并附在以后所有的请求头中
    nickName:string; // 昵称
    success:boolean;
    avatar:string;
    errorInfo:string;
}
export interface SignUpRequesetBodyModel {
    phone:string;
    password:string;
    phoneAuthCode:string;// 手机验证码
}
export interface SignUpResponseBodyModel {
    token:string;
    success:boolean;
    errorInfo:string;
}
export interface PhoneAuthRequestBodyModel {
    phone:string;
}
export interface PhoneAuthResponseBodyModel {
    success:boolean;
    errorInfo:string;
}
export interface CheckPhoneAuthRequestBodyModel {
    code:string; // 手机收到的验证码
}
export interface CheckPhoneAuthResponseBodyModel {
    success:boolean;
    errorInfo:string;
}
export interface   ResetPWRequestBodyModel {
    phone:string;
    phoneAuthCode:string; // 手机收到的验证码
    password:string; // 新密码
}
export interface ResetPWResponseBodyModel {
    success:boolean;
    token:string;
    errorInfo:string;
}