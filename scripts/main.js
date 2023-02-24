import { getFish } from './database.js'
import { FishList} from './FIshList.js'
const allFish = getFish()

for (const singleFish of allFish) {
    console.log(singleFish)
}



/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishList")


parentHTMLElement.innerHTML = FishList()