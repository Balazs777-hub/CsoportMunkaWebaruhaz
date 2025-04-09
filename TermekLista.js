import { termekLista } from "./TermekAdatok.js";

export class TermekLista{
    #carCardsContainer;
    constructor(){
        this.#carCardsContainer = document.getElementById('carCards');
        this.megjelenit();
    }

    megjelenit(){
    // Iteráljuk a termékeket és létrehozzuk a kártyákat
    termekLista.forEach((termek) => {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');
  
    card.innerHTML = `
        <div class="card">
            <img src="${termek.kep}" class="card-img-top" alt="${termek.nev}">
            <div class="card-body">
            <h5 class="card-title">${termek.nev}</h5>
            <p class="card-text">${termek.leiras}</p>
            <p class="card-text"><strong>Ár: ${termek.Ar} Ft</strong></p>
            <button class="btn btn-primary">Kosárba rakom</button>
            </div>
        </div>
        `;
    
        this.#carCardsContainer.appendChild(card);
    });
    }

}


