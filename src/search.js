import { cardsURL } from "./index.js"
import { createCard } from "./cards.js"

const searchElement = document.getElementById('search')

export async function renderCards() {
    const response = await fetch(cardsURL)
    const cardsArr = await response.json()
    searchElement.oninput = () => {
        const testDel = document.querySelectorAll('.cards-item')
        testDel.forEach((element) => { element.remove() })
        const regex = new RegExp(searchElement.value) // regex = /value from input/
        for(let i = 0; i < cardsArr.length; i++) {
            if (regex.test(cardsArr[i].name.toLowerCase())) {
                if (searchElement.value !== '') {
                    createCard(cardsArr[i])
                } else {
                    testDel.forEach((element) => { element.remove() })
                }
            }
        }
    }
}