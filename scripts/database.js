/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clown Fish",
            food: "Kale",
            size: 2 ,
            location:"Peru",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKaweOKhIE6_YD5rAnXiZfKpDiqPSD_beAlpWAJSL&s",
            
        },
        {
            name: "Leo",
            species: "Lion Fish" ,
            food: "Worms",
            size: 4 ,
            location:"Brazil" ,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7We3mXW4Mo2NZU0p7B02i3jyqU_aSPvPhwYQsi8wGw&s",

        } ,
        
        {
            name: "Angel",
            species: "Angelica" ,
            food: "Spiders",
            size: 1 ,
            location:"Greece" ,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLp5ofO_RtjplvEFF6HELapJqxgaXlAR1TK-Hvpf8FA&s",

        } ,
        {
            name: "Goldy",
            species: "Goldfish" ,
            food: "Flies",
            size: 4 ,
            location:"Italy" ,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9JmSxnuuO3qH0iq2SOeMGl_wik011D63oQ&usqp=CAU" ,

        } ,
        {
            name: "Plex",
            species: "Plecco" ,
            food: "Algae",
            size: 6 ,
            location:"Iceland" ,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHVr-Co0S3WpJ8PWDfdOL0GoqJCcE7e99fpw&usqp=CAU" ,

        } 
        
    ]
}
export const getFish = () => {
        return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
    }