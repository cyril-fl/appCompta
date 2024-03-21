import { Flux } from './flux.js';
import { Panel } from './panel.js';
import { Page } from './page.js';

export class SaveFile {
// Constructor
    constructor(pageCollection = [], creationDate= new Date, lastUpDate = new Date) {
        this.pageCollection = pageCollection;
        this.pageCurrent;
        this.creationDate = creationDate;
        this.lastUpDate = lastUpDate;
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
                page = this.pageCollection.find( page => page.id === pageId );
                    this.refresh('panelDiv',page.pageSet());
            } else if (this.pageCollection.length !== 0){ 
                page = this.pageCollection.find( page => page.id === 1 );
                console.log(page)
                    return page.pageSet()
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
        const toSave = { pageCollection : this.pageCollection, creationDate: this.creationDate, lastUpDate : this.lastUpDate };
            const saveFile = JSON.stringify(toSave, null, 2);
                localStorage.setItem('data.json', saveFile);
                console.log('Fichier sauvegardé');
    }

    loadFile() {
        let save = localStorage.getItem('data.json');
        console.log('Fichier chargé');
    
        const saveData = JSON.parse(save);
        const { pageCollection, creationDate, lastUpDate } = saveData;
    
        if (pageCollection && pageCollection.length > 0) {
            pageCollection.forEach(pageData => {
                let page = new Page(pageData.id);
                    Page.resetId(page.id);
                if (pageData.panelCollection && pageData.panelCollection.length > 0) {
                    pageData.panelCollection.forEach(panelData => {
                        let panel = new Panel(panelData.id, panelData.name);
                            Panel.resetId(panel.id);
                        if (panelData.fluxCollection && panelData.fluxCollection.length > 0) {
                            panelData.fluxCollection.forEach(fluxData => {
                                let flux = new Flux(fluxData.id, fluxData.name, fluxData.value);
                                    Flux.resetId(flux.id);
                                panel.fluxCollection.push(flux);
                            });
                        }
                        page.panelCollection.push(panel);
                    });
                }
                this.pageCollection.push(page);
            });
        }
    
        this.lastUpDate = lastUpDate;
        this.creationDate = creationDate;

    }
    
    
 }

    /** 

    displayFile() {
        // this.pageNav();
        // Ici, tu pourrais ajouter d'autres éléments à afficher, en fonction de tes besoins
    }
    */

