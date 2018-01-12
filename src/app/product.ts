export class Product {

    id:string;
    naziv:string;
    kolicina_na_lageru:string;

    constructor(id:string,naziv:string,kolicina_na_lageru:string){

        this.id=id;
        this.naziv=naziv;
        this.kolicina_na_lageru=kolicina_na_lageru;
        return this;

    }
}
