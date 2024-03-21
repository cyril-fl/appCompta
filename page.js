import { Flux } from './flux.js';
import { Panel } from './panel.js';

export class Page {
    static pageId = 0;
    static resetId(i) {
        Page.pageId = i;
    }
    constructor(id = ++Page.pageId, panelCollection = [] ) {
        this.id =id;
        this.panelCollection = panelCollection;  
    }

    display() {
        let panelDiv = document.createElement('div');
            panelDiv.setAttribute('id','panelDiv')

            this.panelCollection.forEach(panel => {
                panelDiv.appendChild(panel.panelDisplay())
            });
  
        return panelDiv
    }

    pageSet() {
        if ( this.panelCollection.length == 0 ) {
            let panelIn = new Panel(this.id ,`PanelIn ${this.id}`); // Crée une nouvelle instance de Panel pour panelIn
            let panelOut = new Panel(this.id ,`PanelOut ${this.id}`); // Crée une nouvelle instance de Panel pour panelOut
                this.panelCollection.push(panelIn, panelOut);
        } 
        return this.display();
    }



            //*** DEBUG ***
        // updateFluxDOM() {
        //     // Trouver l'élément <pre> existant
        //     let fluxDOM = document.querySelector('#fluxData');
        //         if (fluxDOM) {
        //             fluxDOM.textContent = JSON.stringify(this.fluxHistory, null, 2);
        //         } else {
        //             fluxDOM = document.createElement('pre');
        //                 fluxDOM.textContent = JSON.stringify(this.fluxHistory, null, 2);
        //                     fluxDOM.setAttribute('id', 'fluxData');
        //                         document.body.appendChild(fluxDOM);
        //         };
        // }; 

}
