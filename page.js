import { Flux } from './flux.js';
import { Panel } from './panel.js';

export class Page {
    static pageId = 0;

    constructor() {
        this.id = ++Page.pageId;
        this.panelIn = new Panel(this.id, 'PanelIn'); // Crée une nouvelle instance de Panel pour panelIn
        this.panelOut = new Panel(this.id, 'PanelOut'); // Crée une nouvelle instance de Panel pour panelOut
    }

    pageDisplayƒ() {
        document.body.appendChild(this.panelIn.panelDisplay());
        document.body.appendChild(this.panelOut.panelDisplay());
    }

    // pageSave() {

    //     console.log(this.panelIn);
    //     console.log(this.panelOut);

    // let savedata = {panelIn : this.panelIn, panelOut : this.panelOut }

    //     console.log(savedata);// et de la je dois faire appe a un fichier de sauvegarde et d'enccyptafe en sql

    // }

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
