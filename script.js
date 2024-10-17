const hamburger = document.querySelector('.ham1')
const menu = document.querySelector('menu')
const logoContainer = document.querySelector('.logo-container') 
let isFirstTime = true

const gridItems_3_rows = `<div class="grid-item">
<img src="assets/images/icons/określenie potrzeb finansowych.png" alt="">
<h4>Określenie potrzeb finansowych</h4>
</div>
<div class="grid-arrow">
<img src="assets/images/icons/strzalka.png" alt="Arrow right">
</div>
<div class="grid-item">
<img src="assets/images/icons/ocena zdolności kredytowej.png" alt="Ocena zdolności kredytowej">
<h4>Ocena zdolności kredytowej</h4>
</div>
<div class="grid-arrow">
<img src="assets/images/icons/strzalka.png" alt="Arrow right">
</div>
<div class="grid-item">
<img src="assets/images/icons/dopasowanie produktu.png" alt="Dopasowanie produktu">
<h4>Dopasowanie produktu</h4>
</div>

<div class="grid-item">
<img src="assets/images/icons/złożenie wniosku.png" alt="Złożenie wniosku w wybranym banku">
<h4>Złożenie wniosku w wybranym banku</h4>
</div>
<div class="grid-arrow">
<img src="assets/images/icons/strzalka.png" alt="Arrow right">
</div>
<div class="grid-item">
<img src="assets/images/icons/decyzja kredytowa.png" alt="Decyzja kredytowa / podpisanie umowy">
<h4>Decyzja kredytowa / podpisanie umowy</h4>
</div>
<div class="grid-arrow">
<img src="assets/images/icons/strzalka.png" alt="Arrow right">
</div>
<div class="grid-item">
<img src="assets/images/icons/przelew środków.png" alt="Przelew środków na konto">
<h4>Przelew środków na konto</h4>
</div>`

const gridItems_2_rows = `
            <div class="grid-item">
                <img src="assets/images/icons/określenie potrzeb finansowych.png" alt="">
                <h4>Określenie potrzeb finansowych</h4>
            </div>
            <div class="grid-arrow">
                <img src="assets/images/icons/strzalka.png" alt="Arrow right">
            </div>
            <div class="grid-item">
                <img src="assets/images/icons/ocena zdolności kredytowej.png" alt="Ocena zdolności kredytowej">
                <h4>Ocena zdolności kredytowej</h4>
            </div>

            <div class="grid-item">
                <img src="assets/images/icons/dopasowanie produktu.png" alt="Dopasowanie produktu">
                <h4>Dopasowanie produktu</h4>
            </div>
            <div class="grid-arrow">
                <img src="assets/images/icons/strzalka.png" alt="Arrow right">
            </div>
            <div class="grid-item">
                <img src="assets/images/icons/złożenie wniosku.png" alt="Złożenie wniosku w wybranym banku">
                <h4>Złożenie wniosku w wybranym banku</h4>
            </div>


            <div class="grid-item">
                <img src="assets/images/icons/decyzja kredytowa.png" alt="Decyzja kredytowa / podpisanie umowy">
                <h4>Decyzja kredytowa / podpisanie umowy</h4>
            </div>
            <div class="grid-arrow">
                <img src="assets/images/icons/strzalka.png" alt="Arrow right">
            </div>
            <div class="grid-item">
                <img src="assets/images/icons/przelew środków.png" alt="Przelew środków na konto">
                <h4>Przelew środków na konto</h4>
            </div>
`

const grid = document.querySelector('.icon-grid')

function insert_grid_based_on_width() {
    if (window.innerWidth >= 1200) {
        grid.innerHTML = gridItems_3_rows
    }
    else if (window.innerWidth < 1200) {
        grid.innerHTML = gridItems_2_rows
    }
    if (window.innerWidth > 800) {
        menu.classList.remove('menu-show')
        menu.classList.remove('menu-hide')
        menu.classList.remove('menu-active')
        hamburger.classList.remove('active')
        isFirstTime = true
        logoContainer.style.display = 'flex'
    }
}

insert_grid_based_on_width()

window.addEventListener('resize', insert_grid_based_on_width);

isFirstTime = true

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    menu.classList.toggle('menu-show')
    menu.classList.toggle('menu-active')
    
    if (logoContainer.style.display == 'none') {
        setTimeout(() => {
            logoContainer.style.display = 'flex'
        }, 1010)
    } 
    else {
        logoContainer.style.display = 'none'
    }
    
    if (isFirstTime) {
        isFirstTime = false
    }
    else {
        menu.classList.toggle('menu-hide')
    }
})
