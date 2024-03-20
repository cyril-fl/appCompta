import { Flux } from './flux.js';
import { Page } from './page.js';
import { Panel } from './panel.js';
// import { Flux } from './flux.js';
let page = new Page();        
    page.panelIn.addNewFlux(3);
    page.panelOut.addNewFlux(3)


    page.pageDisplay();
    page.pageSave();


