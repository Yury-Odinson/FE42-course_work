import { createElement } from "./createElement.js"
import { calcPrice, cardsURL } from "./index.js"

const cardsBlock = document.getElementById('cards')

const goodsLocalStorage = []

export function createCard({name, price, image, sale, idElem, description}) {

    const cardItem = createElement('div', ['cards-item'], {id: idElem})
        const itemContent = createElement('div', ['item-content'], {})
            const cardImage = createElement('img', ['item__image'], {})
            cardImage.src = image
            const itemInfo = createElement('div', ['item-info'], {})
                const itemName = createElement('div', ['item__name'], {})
                itemName.innerHTML = name
                const itemDescription = createElement('div', ['item__descriptions'], {})
                itemDescription.innerHTML = description
            itemInfo.append(itemName, itemDescription)
        itemContent.append(cardImage, itemInfo)
        
        const itemFooter = createElement('div', ['item-footer'], {})
            const itemAddInBasket = createElement('span', ['item__byu'], {})
            itemAddInBasket.innerHTML = 'Add to basket'

            const itemPrices = createElement('div', ['item-price'], {})
                const discountPrice = createElement('span', ['item__discountPrice'], {})
                discountPrice.innerHTML = calcPrice(price, sale) + ' PLN'

            const itemNormalPrice = createElement('span', ['item__normalPrice'], {})
            itemNormalPrice.innerHTML = price +' PLN'
            itemPrices.append(discountPrice, itemNormalPrice)

        itemFooter.addEventListener('click', () => {
            setLocalStorage(idElem)
        })

        itemFooter.append(itemAddInBasket, itemPrices)
    
    cardItem.append(itemContent, itemFooter)
    cardsBlock.append(cardItem)
}

const basketElement = []

async function setLocalStorage(idCards) {
    const response = await fetch(cardsURL)
    const cardsArr = await response.json()
    for(let i = 0; i < cardsArr.length; i++ ) {
        if(cardsArr[i].idElem === idCards) {
            basketElement.push(cardsArr[i])
            return localStorage.setItem('goods', JSON.stringify(basketElement))
        }
    }
}
