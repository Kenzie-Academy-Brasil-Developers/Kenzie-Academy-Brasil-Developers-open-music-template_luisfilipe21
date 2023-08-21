export const darkMode = () => {
    const mainTag = document.querySelector("html");
    const button = document.querySelector('.header__button');
    const imgButton = document.createElement('img');

    imgButton.classList.add('img__button');
    imgButton.src = 'https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t';


    const userPreference = JSON.parse(localStorage.getItem('@openMusic:darkMode'))

    button.addEventListener("click", () => {
        mainTag.classList.toggle('dark-mode');
    
        if(mainTag.classList.contains('dark-mode')){
            imgButton.src = 'https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t';
            localStorage.setItem('@openMusic:darkMode', true);
        }else{
            imgButton.src = 'https://media.graphassets.com/AWCWFFLPSEWh4lhYs68c'
            localStorage.setItem('@openMusic:darkMode', false);            
        }
    })
    
    if(userPreference){
        mainTag.classList.add('dark-mode');
        
    }else{
        mainTag.classList.remove('dark-mode');
    }

    button.appendChild(imgButton);
}