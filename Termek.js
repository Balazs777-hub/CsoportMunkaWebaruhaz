export class Termek{
    #adatok;
    #szuloElem;
    #kosarGOMB;
    #index;
    constructor(adatokObjektum, szuloElem, index){
        this.#adatok = adatokObjektum;
        this.#szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
        console.log("asd");
    }

    megjelenit(){
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
        <div class="card">
            <img src="${this.#adatok.kep}" class="card-img-top" alt="${this.#adatok.nev}">
            <div class="card-body">
            <h5 class="card-title">${this.#adatok.nev}</h5>
            <p class="card-text">${this.#adatok.leiras}</p>
            <p class="card-text"><strong>Ár: ${this.#adatok.Ar} Ft</strong></p>
            <button class="btn btn-primary">Kosárba rakom</button>
            </div>
        </div>
        `;

        this.#szuloElem.appendChild(card);
    }
}