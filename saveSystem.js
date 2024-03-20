import { Flux } from './flux.js';
import { Panel } from './panel.js';
import { Page } from './page.js';

export class SaveFile {
// Constructor
    constructor() {
        this.pageCollection = [];
        this.pageCurrent;
        this.creationDate = new Date;
        this.lastUpDate = new Date;
    }
// ____________________________________
// Display  

    displayFile() {
        let pageCurrent = this.displayInit();
            document.body.appendChild(this.pageNav());
                    document.body.appendChild(pageCurrent);
    };

    displayInit(pageId) { // renomener mieux
        let page;
            if (pageId) {
                page = this.pageCollection.find(page => page.id === pageId);
                    this.refresh('panelDiv',page.pageSet());
            } else {
                console.log('pas de page encore');
                    page = new Page;
                        this.pageCollection.push(page);  
                            return page.pageSet()
            }
    }

// ____________________________________
// New page
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

                this.refresh('pageNav',this.pageNav());
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
            
            // separer en eune autre function ?
                pageIds.forEach(pageId => {
                    let navLi = document.createElement('li');
                        navLi.setAttribute('class', 'navLi')
                    let buttonLi = document.createElement('button'); // Créer un nœud texte avec pageId
                        buttonLi.setAttribute('id',`buttonLi${pageId}`);
                        buttonLi.textContent = `${pageId}`;
                            buttonLi.addEventListener('click', () => {
                                this.displayInit(pageId);
                            });
                        navLi.appendChild(buttonLi); // Ajouter le nœud texte comme enfant de <li>
                        navUl.appendChild(navLi);
                });
            // --
            
                let saveLi = document.createElement('li');
                    saveLi.appendChild(this.saveButton());
                let navLi = document.createElement('li');
                    navLi.appendChild(this.addNewPageButton()); 
                navUl.appendChild(navLi);
                navUl.appendChild(saveLi);        

            pageNav.appendChild(navUl);
        return pageNav
    }


// ____________________________________
// Refresh
    refresh(divName,toReload) {
        let div = document.getElementById(divName);

        if (div) {
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            div.appendChild(toReload);
        }
    }


// ____________________________________
// saveFile

    saveButton() {
        let button = document.createElement('button');
            button.textContent = 'SAVE';
            button.addEventListener('click', () => {
                this.saveFile();
        });   
    return button
    }

    saveFile() {
        this.lastUpDate = new Date();
        // Ici, tu effectues la logique pour sauvegarder les données dans un fichier ou une base de données
        // Par exemple, tu pourrais envoyer les données vers ton backend via une requête HTTP POST
        console.log('Fichier sauvegardé');
        const toSave = { pageCollection : this.pageCollection, creationDate: this.creationDate, lastUpDate : this.lastUpDate };
        const saveFile = JSON.stringify(toSave, null, 2);

        console.log(saveFile);
        //code inconue a detaillé 
        const blob = new Blob([saveFile], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);



    }


    /** 


    loadFile() {
        // Ici, tu effectues la logique pour charger les données depuis un fichier ou une base de données
        // Par exemple, tu pourrais récupérer les données depuis ton backend via une requête HTTP GET
        console.log('Fichier chargé');
    }

    displayFile() {
        // this.pageNav();
        // Ici, tu pourrais ajouter d'autres éléments à afficher, en fonction de tes besoins
    }
    */
}