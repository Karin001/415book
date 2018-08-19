export interface Authentication_signIn{
  phone:string;
  password:string;
  phoneAuthCode:string;
}
export interface Authentication_logIn{
  phone:string;
  password?:string;
  phoneAuthCode?:string;
}
export interface User{
  username: string;
  payload?:string;
}

