import { Flux } from './flux.js';
import { Panel } from './panel.js';

export class Page {
    static pageId = 0;

    constructor() {
        this.id = ++Page.pageId;
        this.panelCollection = [];  
    }

    display() {
        let panelDiv = document.createElement('div');
            panelDiv.setAttribute('id','panelDiv')
            panelDiv.appendChild(this.panelIn.panelDisplay());
            panelDiv.appendChild(this.panelOut.panelDisplay());
        return panelDiv
    }

    pageSet() {
        if ( this.panelCollection.length == 0 ) {
            this.panelIn = new Panel(this.id, `PanelIn ${this.id}`); // Crée une nouvelle instance de Panel pour panelIn
            this.panelOut = new Panel(this.id, `PanelOut ${this.id}`); // Crée une nouvelle instance de Panel pour panelOut
                this.panelCollection.push(this.panelIn, this.panelOut);
        } 
        return this.display();
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
