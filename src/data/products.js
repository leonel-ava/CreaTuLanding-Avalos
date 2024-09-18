export const products = [
    {
        id: 1,
        name: "Su-27 Flanker",
        categoryId: 1,
        price: 30000,
        imageUrl: "https://ar.salvat.com/colecciones/aviones-combate/images/avion2194x147.png",
    },
    {
        id: 2,
        name: "F-35 Lightning II",
        categoryId: 2,
        price: 30000,
        imageUrl: "https://ar.salvat.com/colecciones/aviones-combate/images/avion1195x148.png",
    },
    {
        id: 3,
        name: "A-10C Thunderbolt II",
        categoryId: 2,
        price: 25000,
        imageUrl: "https://ar.salvat.com/colecciones/aviones-combate/images/avion6194x147.png",
    },
    {
        id: 4,
        name: "F-14 Tomcat",
        categoryId: 2,
        price: 50000,
        imageUrl: "https://ar.salvat.com/colecciones/aviones-combate/images/avion5194x147.png",
    },
    {
        id: 5,
        name: "F/A-18E Super Hornet",
        categoryId: 2,
        price: 40000,
        imageUrl: "https://ar.salvat.com/colecciones/aviones-combate/images/avion8194x147.png",
    },
      
];

export const categories = [
    {
        id: 1,
        name: "Rusia",
        imageUrl: "https://ar.salvat.com/colecciones/aviones-combate/images/avion2194x147.png",
    },
    {
        id: 2,
        name: "USA",
        imageUrl: "https://ar.salvat.com/colecciones/aviones-combate/images/avion1195x148.png",
    },

];

export function getProductById(id) {
    return products.find(product => product.id == id);
}

export function getProductsByCategoryId(categoryId) {
    return products.filter(product => product.categoryId == categoryId);
}