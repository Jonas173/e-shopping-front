import Article from '../models/article';
import logo1 from '../resources/keyboard.jpg';
import logo2 from '../resources/mouse.jpg';
import logo3 from '../resources/gpu.png';

export default function(){
    return [
        new Article(1, "Mechanical keyboard", 5, 49.99, 79.99, logo1),
        new Article(2, "Mouse", 3, 24.99, 39.99, logo2),
        new Article(3, "Graphics Card", 4, 4339.99, 0, logo3)
    ];
}