const fakeDB2 = {
    movies: [
        {
            id: 101,
            class: "item-a",
            name: "Lucifer",
            image:"images/s-1.jpg",
            type: "Crime, Sci-Fi & Fantasy",
            quality: 8.5,
            time: "2h",
            background: "images/s-1-b.jpg",
            logo: "images/s-1-l.png",
            year: 2016,
            age: "14+",
            description: "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape."
        },
        {
            id: 102,
            class: "item-b",
            name: "Mandalorian",
            image:"images/s-2.jpg",
            type: "Sci-Fi & Fantasy",
            quality: 8.5,
            time: "35m",
            background: "images/s-2-b.jpg",
            logo: "images/s-2-l.png",
            year: 2019,
            age: "14+",
            description: "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter."
        },
        {
            id: 103,
            class: "item-c",
            name: "Queen's Gambit",
            image:"images/s-3.jpg",
            type: "Drama",
            quality: 8.7,
            time: "1h",
            background: "images/s-3-b.jpg",
            logo: "images/s-3-l.png",
            year: 2020,
            age: "16+",
            description: "In a Kentucky orphanage in the 1950s, a young girl discovers an astonishing talent for chess while struggling with addiction."
        },
        {
            id: 104,
            class: "item-d",
            name: "Snowman",
            image:"images/s-4.jpg",
            type: "Animation, Comedy",
            quality: 6.8,
            time: "1h 25m",
            background: "images/s-4-b.jpg",
            logo: "images/s-4-l.png",
            year: 2020,
            age: "0+",
            description: "The previously untold origins of Olaf, the innocent and insightful, summer-loving snowman are revealed as we follow Olaf’s first steps as he comes to life and searches for his identity in the snowy mountains outside Arendelle."
        },
        {
            id: 105,
            class: "item-e",
            name: "Tenet",
            image:"images/s-5.jpg",
            type: "Action, Thriller",
            quality: 7.3,
            time: "2h",
            background: "images/s-5-b.jpg",
            logo: "images/s-5-l.png",
            year: 2020,
            age: "13+",
            description: "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time."
        },
        {
            id: 106,
            class: "item-f",
            name: "Greenland",
            image:"images/s-6.jpg",
            type: "Action, Thriller",
            quality: 7.7,
            time: "2h",
            background:"images/s-6-b.jpg",
            logo: "images/s-6-l.png",
            year: 2020,
            age: "13+",
            description: "John Garrity, his estranged wife and their young son embark on a perilous journey to find sanctuary as a planet-killing comet hurtles toward Earth. Amid terrifying accounts of cities getting levelled, the Garrity's experience the best and worst in humanity. As the countdown to the global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven."
        },
        {
            id: 107,
            class: "item-g",
            name: "Soul",
            image:"images/s-7.jpg",
            type: "Family, Animation, Comedy",
            quality: 8.3,
            time: "1h 42m",
            background: "images/s-7-b.jpg",
            logo: "images/s-7-l.png",
            year: 2020,
            age: "8+",
            description: "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child."
        },
        {
            id: 108,
            class: "item-h",
            name: "I Care a Lot",
            image:"images/s-8.jpg",
            type: "Comedy, Crime, Thriller",
            quality: 7.1,
            time: "1h 59m",
            background: "images/s-8-b.jpg",
            logo: "images/s-8-l.png",
            year: 2020,
            age: "14+",
            description: "A court-appointed legal guardian defrauds her older clients and traps them under her care. But her latest mark comes with some unexpected baggage."
        },
        {
            id: 109,
            class: "item-i",
            name: "Interstellar",
            image:"images/s-9.jpg",
            type: "Action",
            quality: 7.2,
            time: "1h 58m",
            background: "images/s-9-b.jpg",
            logo: "images/s-9-l.png",
            year: 2014,
            age: "13+",
            description: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."
        },
        {
            id: 110,
            class: "item-j",
            name: "Parasite",
            image:"images/s-10.jpg",
            type: "Comedy, Thriller, Drama",
            quality: 8.5,
            time: "2h 13m",
            background: "images/s-10-b.jpg",
            logo: "images/s-10-l.png",
            year: 2019,
            age: "16+",
            description: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident."
        },
        {
            id: 111,
            class: "item-k",
            name: "The Godfather",
            image:"images/s-11.jpg",
            type: "Drama, Crime",
            quality: 8.7,
            time: "2h 55m",
            background: "images/s-11-b.jpg",
            logo: "images/s-11-l.png",
            year: 1972,
            age: "14+",
            description: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge."
        },
        {
            id: 112,
            class: "item-l",
            name: "Game of Thrones",
            image:"images/s-12.jpg",
            type: "Sci-Fi & Fantasy, Drama, Action",
            quality: 9.9,
            time: "1h",
            background: "images/s-12-b.jpg",
            logo: "images/s-12-l.png",
            year: 2011,
            age: "16+",
            description: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond."
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

module.exports = fakeDB2;