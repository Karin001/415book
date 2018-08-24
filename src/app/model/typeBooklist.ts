export interface Book{
    name:string;
    author:string;
    imgSrc:string;
    id:string;
    jianjie_short: string;
    jianjie:string;
}
export class TypeBooklist{
    typeName:string;
    books:Book[];
}
