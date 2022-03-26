class Article {
    name: string;
    rating: number;
    priceInEuro: number;
    reducedFrom: number;

    constructor(name: string, rating: number, priceInEuro: number, reducedFrom: number){
        this.name = name;
        this.rating = rating;
        this.priceInEuro = priceInEuro;
        this.reducedFrom = reducedFrom;
    }
}

export default Article