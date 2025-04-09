import { termekAdatok } from "./TermekAdatok.js";
import { Termek } from "./Termek.js";

export class TermekLista{
    #szuloElem;
    #termekLista= [];
    constructor(){
        this.#termekLista = termekAdatok;
        this.#szuloElem = document.getElementById('carCards');
        this.megjelenit();
    }

    megjelenit(){
    // Iteráljuk a termékeket és létrehozzuk a kártyákat
        for (let i = 0; i < termekAdatok.length; i++) {
            new Termek(termekAdatok[i], this.#szuloElem, i);            
        }
    }

  
  
}
