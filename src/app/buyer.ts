import { Product } from "./product";

export class Buyer {

    id:string;
    ime:string;
    prezime:string;
    email:string;
    kupljeno:Product[];

    constructor(id:string,ime:string,prezime:string, email:string,kupljeno:Product[]){

        this.id=id;
        this.ime=ime;
        this.prezime=prezime;
        this.email=email;
        return this;

    }

}
