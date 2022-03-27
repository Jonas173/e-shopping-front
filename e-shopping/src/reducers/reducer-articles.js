import Article from '../models/article';

export default function(){
    return [
        new Article(1, "Mechanical keyboard", 5, 49.99, 79.99),
        new Article(2, "Blender", 1, 109.99, 239.99),
        new Article(3, "Graphics Card", 5, 4339.99, 0)
    ];
}