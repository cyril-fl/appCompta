import { Flux } from './flux.js';
import { Panel } from './panel.js';

export class Page {
    static pageId = 0;
        static resetId(i) {
            Page.pageId = i;
        }

    constructor(id = ++Page.pageId, collection = [] ) {
        this.id =id;
        this.collection = collection;  
    }

    set() {
        if ( this.panelCollection.length == 0 ) {
        // retravailler sur cette parti ci 
            let panelIn = new Panel(this.id ,`PanelIn ${this.id}`); // Crée une nouvelle instance de Panel pour panelIn
            let panelOut = new Panel(this.id ,`PanelOut ${this.id}`); // Crée une nouvelle instance de Panel pour panelOut
                this.panelCollection.push(panelIn, panelOut);
        } 
            return this.display();
    }

    display() {
        let page = document.createElement('div');
            page.setAttribute('class','page')
                //     //clean a partir d'ici .

                // this.collection.forEach(panel => {

                //     // page.appendChild(panel.panelDisplay())

                // });

        //iciiiii


        console.error('clean a partir dici');
        
        return page
    }

}
