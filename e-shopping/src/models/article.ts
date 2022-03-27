class Article {
    id: number;
    name: string;
    rating: number;
    priceInEuro: number;
    reducedFrom: number;

    constructor(id: number,name: string, rating: number, priceInEuro: number, reducedFrom: number){
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.priceInEuro = priceInEuro;
        this.reducedFrom = reducedFrom;
    }
}

export default Article