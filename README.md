

### structure HTML:
|Block №|Имя блока| Компоненты | Реализация|
|-------|---------|-------------------------------------|-----|
| 1     | header  | кнопка главной страницы             | ссылка на index.html
|       |         |поисковая строка                     |JS. результаты поиска отображать в блоке hits, путём сортировки по совпадению имён
|       |         |кнопка "Корзина"                     | JS. всплывающее модальное окно с отрисовкой данных из Local Storage
|2      |main     |slider                               | JS. думаю, лучше использовать готовую библиотеку. содержание слайдера из картинок. при нажатии на определённую картинку всплывает модальное окно с товаром (по принципу блока № 4)
|       |         |hits                                 | отображать весь список товаров с горизонтальным скроллом
|3      |basket   |список товаров, добавленных в корзину| отобажение данных из Local Storage 
|4      |quickView|                                     |модальное окно с быстрым просмотром товара: имя, изображение, описание, цена, "кнопка добавить в корзину"

### points css-adaptive:

* min-width: 901px; max-width: 1024px
* min-width: 769px; max-width: 900px
* min-width: 601px; max-width: 768px
* min-width: 481px; max-width: 600px
* min-width: 320px; max-width: 480px

проверять, как стили ведут себя для заданных в браузер значениях, т.е. для iPhone SE, iPad Air, Galaxy Fold, etc...


### structure JS:

JS files:
1. index.js - главный файл с импортом сторонних функций
2. search.js - файл для поиска товаров
3. basket.js - файл реализации функционала корзины
4. slider - файл функционала слайдера


- все товары представлены как объект. структура объекта с подгрузкой из mockAPI.io:
```js
{
    id: Object ID,
    name: string,
    price: number,
    discountPrice: number
    image: faker.js
}
```


LocalStorage хранит 2 ключа: 
1. goods (все товары)
2. fullPrice (полная цена)

примерные данные для LocalStorage: 
```js
const arrayStorage = [{name: 'string', price: Number}, {name: 'string', price: Number}]
const fullPrice = sumPrice()
```
где `sumPrice()`  суммирует все значения `Number` ключа `price`

- по нажатию на кнопку `"добавить товар в корзину"` добавляем элемент в массив `arrayStorage`
```js
buttonAdd.onclick = () => {
    arrayStorage.push({name: 'thisName', id: 'thisId'})
    setLocalStorage()
}
```

- по нажатию кнопки "Очистить корзину" вызывается `localStorage.clear()`

- модальное окно корзины появляется по клику на кнопку "Корзина". функционал отрисовки с помощью js, по принципу домашки из todo

```js
buttonBasket.onclick = () => {
    getLocalStorage()
}
```

- реализация слайдера, возможно, с помощью сторонней библиотеки

### git branches:
![Image alt](https://sun9-53.userapi.com/impg/D-yJdFwc0a8HjJvriINcpEB785ZQtArhrcGZhw/4O6Zc4AWMAE.jpg?size=580x440&quality=95&sign=e49b09deb3913da3ba7ba2b33e77eb36&type=album)
