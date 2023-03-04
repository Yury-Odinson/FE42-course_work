import { createCard } from "./cards.js";

const rootElement = document.getElementById('root');
rootElement.append(wrapperElement)

const wrapperElement = document.getElementById('wrapper')

const cardsBlock = document.getElementById('cards')
wrapperElement.append(cardsBlock)

// cardsBlock.append(createCard)
