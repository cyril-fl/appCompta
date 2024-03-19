import { Flux } from './flux.js';
import { Panel } from './panel.js';

export class Page {
    static pageId = 0;

    constructor() {
        this.id = ++Page.pageId;
        this.panelIn = new Panel(this.id, 'PanelIn'); // Crée une nouvelle instance de Panel pour panelIn
        this.panelOut = new Panel(this.id, 'PanelOut'); // Crée une nouvelle instance de Panel pour panelOut
    }

    pageDisplay() {
        this.panelIn.panelDisplay();
        this.panelOut.panelDisplay();
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
