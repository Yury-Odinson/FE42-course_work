import { createElement } from "./createElement.js"



function addText(text) {
    return document.createTextNode(text)
}

const cards = [{
    name: "name 1",
    price: 89,
    discountPrice: 92,
    image: "https://loremflickr.com/640/480/cats",
    id: "1"
}]


// export const createCards = createElement('div', ['cards-item'], {})

// function createCard({name, price, discountPrice, image}) {
// export const createCard = createElement('div', ['cards-item'], {})



export function createCard({name, price, discountPrice}) {

    const cardItem = createElement('div', ['cards-item'], {})



    // function 
    // const cardImage = () => {
    //     const img = new Image()
    //     img.src = 'https://loremflickr.com/640/480/cats'
    //     img.classList.add('item__image')
    //     return img
    // }

    // cardItem.append(cardImage)

    const disPrice = createElement('span', ['item__discountPrice'], {})
    disPrice.append(discountPrice)

    const normalPrice = createElement('span', ['item__price'], {})
    normalPrice.append(price)

    const description = createElement('span', ['item__description'], {})
    description.append(name)

    const itemInfo = createElement('div', ['cards-item-info'], {})
    itemInfo.append(disPrice, normalPrice, description)

    cardItem.append(itemInfo)
    return cardItem

}
   
// createCard(cards)

// console.log(createCard(cards))
// }

// console.log(createCard())
// createCards.append(createCard)







