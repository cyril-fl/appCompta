import { Flux } from './flux.js';
// import { Panel } from './panel.js';

export class Page {
    static pageId = 0;

    constructor() {
        this.id = ++Page.pageId;
        // this.panelIn = new Panel(this.id, 'PanelIn'); // Crée une nouvelle instance de Panel pour panelIn
        // this.panelOut = new Panel(this.id, 'PanelOut'); // Crée une nouvelle instance de Panel pour panelOut
    }

    pageDisplay() {
        console.log('coucou');
        // this.panelIn.panelDisplay();
        // this.panelOut.panelDisplay();
    }
}
