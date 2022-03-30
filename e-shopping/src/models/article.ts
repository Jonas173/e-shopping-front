class Article {
    id: number;
    name: string;
    rating: number;
    priceInEuro: number;
    reducedFrom: number;
    logo: string;

    constructor(id: number,name: string, rating: number, priceInEuro: number, reducedFrom: number, logo: string){
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.priceInEuro = priceInEuro;
        this.reducedFrom = reducedFrom;
        this.logo = logo;
    }
}

export default Article