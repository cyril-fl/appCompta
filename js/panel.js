import { Flux } from './flux.js';


export class Panel {
    static panelId = 0;
    static resetId(i) {
        Panel.panelId = i;
    }

    constructor(pageId,name = `panel ${id}`, id = ++Panel.panelId, collection = []) {
        this.pageId = pageId;
        this.name = name; 
        this.id = id;
        this.collection = collection;
    }

        newFlux(nbr) {
            for (let i = 0; i < nbr; i++) {
                let newFlux = new Flux(this.id,'Libellé', 0);
                    this.collection.push(newFlux); 

                    // this.fluxCollection.splice(2,0,newFlux); // a travailler dessis
                };
        };


        display() {
            let div = document.createElement('div');
                div.setAttribute('class', 'panel');

                let name = document.createElement('h1');
                    name.textContent = this.name;
                let array = this.arrayDisplay(); // Appel de la méthode pour récupérer l'élément tableIncome

                    div.appendChild(name);
                    div.appendChild(array);
                return div
        };

        
        newCell(id,defaultValue ,event) {
            let valueTd = document.createElement('td');
                let valueInput = document.createElement('input');
                    valueInput.setAttribute('class', `raw${id}`);
                    valueInput.setAttribute('type', 'text');
                    valueInput.setAttribute('placeholder', defaultValue);
                    if (event) { // Vérification si 'event' existe avant d'ajouter l'écouteur
                        valueInput.addEventListener('input', event); // Modification de 'event(event)' à 'event' pour ajouter l'écouteur correctement
                    }
                valueTd.appendChild(valueInput);
            return valueTd
        }

        arrayDisplay() {
            let tbody = document.createElement('tbody');
                if(this.collection.length === 0 ) {
                    this.newFlux(1);
                }
                console.log(this.collection);
                this.collection.forEach(flux => {
                    const { panelId, id, name, isPositif, value, toAccount, fromAccount, date, comment, } = flux;
                        let tableIncome = document.createElement('tr');

                            let nameEvent = (event) => {
                                flux.name = event.target.value;
                            };
                                let nameTd = this.newCell(id,name,nameEvent);

                            let valueEvent = (event) => {
                                let newValue = parseFloat(event.target.value);
                                    if (!isNaN(newValue)) {
                                        flux.value = newValue; // Mettre à jour la valeur dans fluxHistory
                                                    // this.updateFluxDOM(); // Mettre à jour l'affichage DEBUG
                                    } else {
                                        console.error('La valeur entrée n\'est pas un nombre valide.');
                                    }
                            };
                                let valueTd = this.newCell(id,value, valueEvent)

                                let buttonTd = document.createElement('td');
                                    buttonTd.setAttribute('class', `raw${id}`)// et ici 
                                    buttonTd.appendChild(this.newFluxButton(`raw${id}`)); // et clean ici 

                                    console.log(buttonTd)

                        tableIncome.appendChild(nameTd);
                        tableIncome.appendChild(valueTd);
                        tableIncome.appendChild(buttonTd);

                        
                    tbody.appendChild(tableIncome);
                });
            return tbody
        };

        newFluxButton(clas) {
            let button = document.createElement('button');
            button.textContent = '+';
            button.addEventListener('click', () => {
                console.log(clas);
                let lastCharacterCopy = clas.slice(-1);
                console.log(lastCharacterCopy);
                
                let newFlux = new Flux(this.id, 'Libellé', 0);
        
                // Trouver la position de l'élément dans this.collection avec l'id correspondant à lastCharacterCopy
                let position = this.collection.findIndex(flux => flux.id === lastCharacterCopy);
                
                // Si l'élément avec l'id correspondant est trouvé, insérer newFlux après cet élément
                if (position !== -1) {
                    this.collection.splice(position + 1, 0, newFlux);
                }
        
                console.log(this.collection);
        
                // Supprimer les éléments avec la classe spécifique
                let elementsToRemove = document.getElementsByClassName(clas);
                while (elementsToRemove.length > 0) {
                    elementsToRemove[0].parentNode.removeChild(elementsToRemove[0]);
                }
        
                // Réafficher la partie mise à jour de la page
                let div = document.getElementById(clas);
                if (div) {
                    while (div.firstChild) {
                        div.removeChild(div.firstChild);
                    }
                    // Réafficher la partie mise à jour de la page
                    div.appendChild(this.display());
                }
            });
        
            return button;
        }
        
        
        // newFluxButton(clas) {
        //     let button = document.createElement('button');
        //         button.textContent = '+';
        //         button.addEventListener('click', () => {
        //             console.log(clas);
        //             let lastCharacterCopy = clas.slice(-1)
        //             console.log(lastCharacterCopy);
                    
        //             let newFlux = new Flux(this.id, 'Libellé', 0);
            
        //             // Trouver la position de l'élément dans this.collection avec l'id correspondant à lastCharacterCopy
        //             let position = this.collection.findIndex(flux => flux.id === lastCharacterCopy);
                    
        //             // Si l'élément avec l'id correspondant est trouvé, insérer newFlux après cet élément
        //             if (position !== -1) {
        //                 this.collection.splice(position + 1, 0, newFlux);
        //             }
            
        //             console.log(this.collection);
        //         });

        //         // getElementByClass
        //         // suprimer 
        //         if (div) {

        //             while (div.firstChild) {
        //                 div.removeChild(div.firstChild);
        //             }
        //             // Réafficher la partie mise à jour de la page
        //             div.appendChild(this.display());
        //         }

        //     return button;
        // }
        
        // newFluxButton(clas) {
        //     let button = document.createElement('button');
        //     button.textContent = '+';
        //     button.addEventListener('click', () => {
        //         //quand j'appuie sur le bouton.
        //             console.log(clas);
        //             let lastCharacterCopy = clas.slice(-1)
        //             console.log(lastCharacterCopy);
        //         // crée une un nouveau flux  
        //             // this.newFlux(1);

        //             let newFlux = new Flux(this.id,'Libellé', 0);



        //         // insere ce nouveau flux apres clas.

        //             // touver la position pi class = clas
        //                 console.log(this.collection);
        //                 this.collection.forEach(flux => {

        //                     console.log(flux.id);
        //                     if (flux.id === lastCharacterCopy){
        //                         this.collection.slice(calsstrom,0, newFlux)
        //                     }
                        
                            
        //                 });


        //             //this.collect = [] 
        //             //.slice( position, O, neaw flux)

        //         // clean ici 
        //         // let div = document.getElementById();

                

        //         // if (div) {
        //         //     // Supprimer tous les éléments enfants de panelDiv
        //         //     while (div.firstChild) {
        //         //         div.removeChild(div.firstChild);
        //         //     }
        //         //     // Réafficher la partie mise à jour de la page
        //         //     div.appendChild(this.display());
        //         // }
        //     });
        //     return button;
        // }


}