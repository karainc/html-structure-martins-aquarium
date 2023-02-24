// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${singleFish.image}" /></div>
            <div class="fish">${singleFish.name}</div>
            <div class="fish">${singleFish.species}</div>
            <div class="fish">${singleFish.size}</div>
            <div class="fish">${singleFish.location}</div>
            <div class="fish">${singleFish.food}</div>
          
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

// {
//     name: "Angel",
//     species: "Angelica" ,
//     food: "Spiders",
//     size: 1 ,
//     location:"Greece" ,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLp5ofO_RtjplvEFF6HELapJqxgaXlAR1TK-Hvpf8FA&s",

// } ,