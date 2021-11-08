import 'regenerator-runtime' /* for async await transpile */
import '../styles/style.css'
import '../styles/responsive.css'

// Fetch data from Json
import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let bigData = jsonData['restaurants']
    let dataItem = ''
    bigData.forEach(function(data) {
        dataItem +=`
        <div class="list__item">
            <img class="list__item__thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="city">${data['city']}</div>
            <div class="list__item__content">
                <p class="list__item_rating">
                    Rating : 
                    <a href="#" class="list__item__rating__value">${data['rating']}</a>
                </p>
                <h1 class="list__item__title"><a href="#">${data['name']}</a></h1>
                <div class="list__item__desc">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>
        `
    })
    document.querySelector('div.main-content .content-list').innerHTML = dataItem  
})

// Hamburger Menu
const hamburgerMenu = document.querySelector('#hamburger') 
const heroImage = document.querySelector('.hero') 
const mainContent = document.querySelector('main') 
const drawerMenu = document.querySelector('#drawer') 

hamburgerMenu.addEventListener('click', function (event) {
    drawerMenu.classList.toggle('open') 
    event.stopPropagation() 
}) 

heroImage.addEventListener('click', function () {
    drawerMenu.classList.remove('open') 
}) 

mainContent.addEventListener('click', function () {
    drawerMenu.classList.remove('open') 
}) 
