export default class Vasarlok {

    constructor() {
        this.megjelenit();
        this.fejlec();
    }

    megjelenit(){

        const card = document.querySelector(".boldogV")

        card.innerHTML =`
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="Kepek/costumer4.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="Kepek/costumer2.webp" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="Kepek/costumer3.webp" class="d-block w-100" alt="...">
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
            </button>
        </div>`
    }

    fejlec() {
        const header = document.querySelector(".bg-dark");
        const sticky = header.offsetTop; // A fejléc kezdeti pozíciója

        // Figyeljük a görgetési eseményt
        window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            header.style.position = "fixed"; // Ha a görgetési pozíció elérte a fejlécet, fixáljuk
            header.style.top = "0"; // A fejléc maradjon a képernyő tetején
        } else {
            header.style.position = "relative"; // Ha visszagörgetünk a tetejére, állítsuk vissza az eredeti helyére
            header.style.top = "0"; // Eltávolítjuk a top értéket
        }
    }
}}
