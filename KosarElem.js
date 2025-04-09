export class KosarElem {
    #adatok;
    #szoloElem;
    #torolGOMB
    #index
    constructor(adatok,szoloElem,index) {
      this.#adatok = adatok; 
      this.#szoloElem = szoloElem; 
      this.#index =index;
      this.torolGOMB = this.szoloElem.querySelector('.torolBtn'); 
      this.torolGOMB.addEventListener('click', () => {
    
      });
      this.megjelenit();
    }
  
   
  
    megjelenit(szuloElem) {
        
      
    }
  
    
  }
  