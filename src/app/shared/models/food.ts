export class foods{
    id!:number;
    price!:number;
    Name!:string;
    favorite:boolean = false;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
}