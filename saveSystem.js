import { Flux } from './flux.js';
import { Panel } from './panel.js';
import { Page } from './page.js';

export class SaveFile {
        constructor() {
            this.pageCollection = [];
            this.creationDate = new Date;
            this.lastUpDate = new Date;
        }
    
    newPage() {
        let newPage = new Page(); 
            this.pageCollection.push(newPage);
    }

    addNewPageButton() {
        let button = document.createElement('button');
        button.textContent = '+';
        button.addEventListener('click', () => {
            this.newPage();
            console.log(this.pageCollection);
            reloa

        });   
       return button
    }

    pageNav() {
        //Nav
        let pageIds = []; 
            this.pageCollection.forEach( page => {
                pageIds.push(page.id);
            });
                console.log(pageIds)

        //Display
        let pageNav = document.createElement('div');
            pageNav.setAttribute('id','pageNav');
            let navUl = document.createElement('ul');
                
                pageIds.forEach(pageId => {
                    let navLi = document.createElement('li');
                    let textNode = document.createTextNode(pageId); // Créer un nœud texte avec pageId
                        navLi.appendChild(textNode); // Ajouter le nœud texte comme enfant de <li>
                        navUl.appendChild(navLi);
                });

                let navLi = document.createElement('li');
                    navLi.appendChild(this.addNewPageButton());     
                navUl.appendChild(navLi);
            pageNav.appendChild(navUl);
        document.body.appendChild(pageNav);
    }


    displayFile() {
        
        this.pageNav();



    }


//possèdene methode save saveFile
    // methode saveFile update this.lastUpDate
//possède une methode load file.
//davefave a une methode pour display ses page ?
//save fila a une methode pour créer de nouvelle page ?


}