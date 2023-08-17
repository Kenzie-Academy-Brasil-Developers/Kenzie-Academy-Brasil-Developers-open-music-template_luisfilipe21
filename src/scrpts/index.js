import {products, categories} from './productsData.js'

const createCard = (array) => {
    const card = document.createElement('li');

    const divContainer = document.createElement('div');

    const divImg = document.createElement('div');
    const imgAlbum = document.createElement('img');

    const divInfoBand = document.createElement('div');
    const bandName = document.createElement('p');
    const albumName = document.createElement('h2');
    const spanBuy = document.createElement('span');
    const spanP = document.createElement('p');
    const spanButton = document.createElement('button');

    const {id, title, price, img, band, year, category} = array;
    
    imgAlbum.src = img;
    imgAlbum.alt = 'Capa do Álbum'

    bandName.classList.add('font2');
    bandName.innerText = `${band} ${year}`;

    albumName.classList.add('font1');
    albumName.innerText = title;

    spanP.classList.add('font1');
    spanP.innerText = `R$ ${price},00`;

    spanButton.classList.add('button__buy');
    spanButton.innerText = 'Comprar';
    // spanButton.innerHTML = id;

    spanBuy.append(spanP, spanButton);
    divInfoBand.append(bandName, albumName, spanBuy);
    divImg.appendChild(imgAlbum);
    divContainer.append(divImg, divInfoBand);

    card.append(divContainer);

    return card;
}

const renderButtons = (array) =>{
    const mainList = document.querySelector('.music__gender')

    array.forEach((button) => {
        const listButton = document.createElement('li');
        const buttonGender = document.createElement('button');
        buttonGender.innerText = button

        listButton.appendChild(buttonGender);
        mainList.appendChild(listButton);
        return listButton;
    })
}

const renderCard = (array) => {
    const mainList = document.querySelector('.album__list')
    mainList.innerHTML = '';

    array.forEach((products) =>{
        const card = createCard(products);
        mainList.appendChild(card); 
    })
}

renderButtons(categories)
renderCard(products)