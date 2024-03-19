import { Flux } from './flux.js';
import { Page } from './page.js';
import { Panel } from './panel.js';
// import { Flux } from './flux.js';


document.addEventListener('DOMContentLoaded', function() {
    // Crée une instance de la classe Page
    let page = new Page();
        
    page.panelIn.addNewFlux(3);
    page.panelOut.addNewFlux(3)

    console.log(page);
    page.pageDisplay();
});
