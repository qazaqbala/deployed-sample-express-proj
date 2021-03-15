const fakeDB3 = {
    movies: [
        {
            id: 101,
            class: "item-a",
            name: "The Good Doctor",
            image:"images/t-1.jpg",
            type: "Drama",
            quality: 8.6
        },
        {
            id: 102,
            class: "item-b",
            name: "WandaVision",
            image:"images/t-2.jpg",
            type: "Sci-Fi & Fantasy",
            quality: 8.5
        },
        {
            id: 103,
            class: "item-c",
            name: "Game of Thrones",
            image:"images/t-3.jpg",
            type: "Sci-Fi & Fantasy",
            quality: 9.9
        },
        {
            id: 104,
            class: "item-d",
            name: "Riverdale",
            image:"images/t-4.jpg",
            type: " Mystery, Drama, Crime",
            quality: 8.6,
            time: "45m"
        },
        {
            id: 105,
            class: "item-e",
            name: "Young Sheldon",
            image:"images/t-5.jpg",
            type: "Comedy",
            quality: 8.1
        },
        {
            id: 106,
            class: "item-f",
            name: "Umbrella Academy",
            image:"images/t-6.jpg",
            type: "Action",
            quality: 8.8
        },
        {
            id: 107,
            class: "item-g",
            name: "Supernatural ",
            image:"images/t-7.jpg",
            type: "Drama",
            quality: 8.2
        },
        {
            id: 108,
            class: "item-h",
            name: "Breaking Bad ",
            image:"images/t-8.jpg",
            type: "Comedy, Crime, Thriller",
            quality: 8.7
        },
        {
            id: 109,
            class: "item-i",
            name: "Lupin",
            image:"images/t-9.jpg",
            type: "Action",
            quality: 7.9
        },
        {
            id: 110,
            class: "item-j",
            name: "Money Heist",
            image:"images/t-10.jpg",
            type: "Comedy, Thriller, Drama",
            quality: 8.3
        },
        {
            id: 111,
            class: "item-k",
            name: "Euphoria",
            image:"images/t-11.jpg",
            type: "Drama, Crime",
            quality: 8.7
        }
    ],

    getAllProducts(){
        return this.movies;
    },
    
    getAProduct(ID)
    {
        const movie = this.movies.find((movie)=>{
            return movie.id == ID;
        })

        return movie;
    },

    getAllFeaturedProducts()
    {

    }
}

module.exports = fakeDB3;