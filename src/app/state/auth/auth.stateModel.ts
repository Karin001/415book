export interface AuthStateModel {
    logged:boolean;
    nickName:string;
    avatar:string;
    resetedPWSuccess:boolean;
    codeSendedByserver:number;
    codeButtonName:string;
    codeButtonDisabled:boolean;
}