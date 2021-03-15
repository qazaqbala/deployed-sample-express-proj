const fakeDB = {
    movies: [
        {
            id: 101,
            class: "item-a",
            name: "Lucifer",
            image:"/images/g-1.jpg",
        },
        {
            id: 102,
            class: "item-a",
            name: "Lucifer",
            image:"/images/g-2.jpg",
        },
        {
            id: 103,
            class: "item-a",
            name: "Lucifer",
            image:"images/g-3.jpg",
        },
        {
            id: 104,
            class: "item-a",
            name: "Lucifer",
            image:"images/g-4.jpg",
        },
        {
            id: 105,
            class: "item-a",
            name: "Lucifer",
            image:"images/g-5.jpg",
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

module.exports = fakeDB;