import {products, categories} from './productsData.js'
import { darkMode } from './theme.js'

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
    
    card.classList.add('list__card');
    divContainer.classList.add('list__div__container');
    divImg.classList.add('list__div__img');
    divInfoBand.classList.add('list__div__info');

    imgAlbum.src = img;
    imgAlbum.alt = 'Capa do Álbum'

    bandName.classList.add('font1');
    bandName.innerText = `${band}       ${year}`;

    albumName.classList.add('font3');
    albumName.innerText = title;

    spanP.classList.add('font2');
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
        
        buttonGender.classList.add('music__gender__btn');
        buttonGender.innerText = button;

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

const filterCard = (arrayProducts, arrayCategories) =>{
    const categoryButtons = document.querySelectorAll('.music__gender__btn');
    const inputPrice = document.querySelector('.input__price__range');

    let filteredArray = arrayProducts;
    let categoryIndex  = 0;
    let inputValue = inputPrice.value;

    inputPrice.addEventListener('input', (event) =>{
        const price = document.querySelector('.price__range');
        const valueInput = event.target.value
        inputValue = valueInput;
        
        price.innerText = `Até R$ ${inputValue}`;

        // const filterPrice = arrayProducts.filter((prices) => prices.price <= inputValue);
        if(categoryIndex === 0){ 
            const productsFiltered = arrayProducts.filter((product) => product.price <= inputValue);
            filteredArray = productsFiltered
            // renderCard(filteredArray)    
        }else{
            const productsFiltered = arrayProducts.filter((product)=> product.category == categoryIndex && product.price <= inputValue);
            filteredArray = productsFiltered
        }   
        renderCard(filteredArray)
    })
    
    categoryButtons.forEach((categories) =>{
        categories.addEventListener('click', (event) =>{
            const findCategory = categories.innerText;
            categoryIndex = arrayCategories.indexOf(findCategory);
            
            if(categoryIndex === 0){ 
                const productsFiltered = arrayProducts.filter((product) => product.price <= inputValue);
                filteredArray = productsFiltered
                // renderCard(filteredArray)    
            }else{
                const productsFiltered = arrayProducts.filter((product)=> product.category == categoryIndex && product.price <= inputValue);
                filteredArray = productsFiltered
            }   
            renderCard(filteredArray)
        })
    })
}


renderButtons(categories)
renderCard(products)
filterCard(products, categories)
darkMode();