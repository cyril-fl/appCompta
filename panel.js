import { Flux } from './flux.js';
import { Page } from './page.js';

export class Panel {
    static panelId = 0;
    static resetId(i) {
        Panel.panelId = i;
    }

    constructor(pageId,name = `panel ${id}`, id = ++Panel.panelId, fluxCollection = []) {
        this.pageId = pageId;
        this.name = name; 
        this.id = id;
        this.fluxCollection = fluxCollection;
    }

        async addNewFlux(nbr) {
            for (let i = 0; i < nbr; i++) {
                let newFlux = new Flux(this.id,'Libellé', 0);
                    // this.fluxCollection.push(newFlux); 

                    this.fluxCollection.splice(2,0,newFlux);
                };
        };


        panelDisplay() {

            let panelDiv = document.createElement('div');
                panelDiv.setAttribute('class', 'panel');

                let panelName = document.createElement('h1');
                    panelName.textContent = this.name;

                    let panelArray = this.panelArrayDisplay(); // Appel de la méthode pour récupérer l'élément tableIncome

                    panelDiv.appendChild(panelName);
                panelDiv.appendChild(panelArray);
            return panelDiv
        };

        
        newCell(defaultValue ,event) {
            let valueTd = document.createElement('td');
            let valueInput = document.createElement('input');
                valueInput.setAttribute('type', 'text');
                valueInput.setAttribute('placeholder', defaultValue);
                if (event) { // Vérification si 'event' existe avant d'ajouter l'écouteur
                    valueInput.addEventListener('input', event); // Modification de 'event(event)' à 'event' pour ajouter l'écouteur correctement
                }
                valueTd.appendChild(valueInput);
            return valueTd
        }

        panelArrayDisplay(divId) {
            let tbody = document.createElement('tbody');
                if(this.fluxCollection.length === 0 ) {
                    this.addNewFlux(1);
                }
                this.fluxCollection.forEach(flux => {
                    const { panelId, id, name, isPositif, value, toAccount, fromAccount, date, comment, } = flux;
                        let tableIncome = document.createElement('tr');

                            let nameEvent = (event) => {
                                flux.name = event.target.value;
                            };
                                let nameTd = this.newCell(name,nameEvent);

                            let valueEvent = (event) => {
                                let newValue = parseFloat(event.target.value);
                                    if (!isNaN(newValue)) {
                                        flux.value = newValue; // Mettre à jour la valeur dans fluxHistory
                                                    // this.updateFluxDOM(); // Mettre à jour l'affichage DEBUG
                                    } else {
                                        console.error('La valeur entrée n\'est pas un nombre valide.');
                                    }
                            };
                                let valueTd = this.newCell(value, valueEvent)

                                let buttonTd = document.createElement('td');
                                    buttonTd.setAttribute('id',`buttonTd${id}`)
                                    buttonTd.appendChild(this.addNewFluxDisplay(divId));

                        tableIncome.appendChild(nameTd);
                        tableIncome.appendChild(valueTd);
                        tableIncome.appendChild(buttonTd);

                        
                    tbody.appendChild(tableIncome);
                });
            return tbody
        };

        addNewFluxDisplay(divId) {
            let button = document.createElement('button');
            button.textContent = '+';
            button.addEventListener('click', () => {
                let panelDiv = document.getElementById(divId);
                this.addNewFlux(1);

                if (panelDiv) {
                    // Supprimer tous les éléments enfants de panelDiv
                    while (panelDiv.firstChild) {
                        panelDiv.removeChild(panelDiv.firstChild);
                    }
                    // Réafficher la partie mise à jour de la page
                    panelDiv.appendChild(this.panelDisplay());
                }
            });
            return button;
        }


        // *** DEBUG ***
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