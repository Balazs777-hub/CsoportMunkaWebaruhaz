import { KosarElem } from "./KosarElem.js";

KosarElem
export default class Kosar {
    #KosarLista = [];
    #szoloELEM;
    constructor(KosarLista, szoloELEM) {
      this.#KosarLista = KosarLista;
      this.#szoloELEM = szoloELEM;
      this.megjelenit();

    }
    megjelenit() {
        this.#szoloELEM.innerHTML = "";
        for (let index = 0; index < this.#KosarLista.length; index++) {
          const element = this.#KosarLista[index];
          new Kosar(element, this.#szoloELEM, index);
        }
    }
    torol(){}
    hozaAd(){}
}