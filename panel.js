import { Flux } from './flux.js';
import { Page } from './page.js';

export class Panel {
    static panelId = 0;

    constructor(pageId, name) {
        this.pageId = pageId;
        this.id = ++Panel.panelId;
        this.name = name; 
        this.fluxHistory = [];
    }

        async addNewFlux(nbr) {
            for (let i = 0; i < nbr; i++) {
                let newFlux = new Flux('', 0);
                    this.fluxHistory.push(newFlux); 
                };
        };


        panelDisplay() {
            let panelDiv = document.createElement('div');
                const divId = `panelDiv${this.id}`;
                console.log(divId)
                panelDiv.setAttribute('id', divId);

                let panelName = document.createElement('h1');
                    panelName.textContent = this.name;

                    let panelArray = this.panelArrayDisplay(divId); // Appel de la méthode pour récupérer l'élément tableIncome

                    panelDiv.appendChild(panelName);
                panelDiv.appendChild(panelArray);
                // panelDiv.appendChild(this.addNewFluxDisplay(divId))
            return panelDiv
        };

        panelArrayDisplay(divId) {
            let tbody = document.createElement('tbody'); 
                this.fluxHistory.forEach(flux => {
                    let name = flux.name;

                    let value = flux.value;

                        let tableIncome = document.createElement('tr');
                            let nameTd = document.createElement('td');
                                let nameInput = document.createElement('input');
                                    nameInput.setAttribute('type', 'text');
                                    nameInput.setAttribute('placeholder', name);
                                        nameInput.addEventListener('input', event => {
                                            flux.name = event.target.value; // Mettre à jour le nom dans fluxHistory
                                            // this.updateFluxDOM(); // Mettre à jour l'affichage
                                        });
                                nameTd.appendChild(nameInput);

                            let valueTd = document.createElement('td');
                                let valueInput = document.createElement('input');
                                    valueInput.setAttribute('type', 'text');
                                    valueInput.setAttribute('placeholder', value);
                                        valueInput.addEventListener('input', event => {
                                            let newValue = parseFloat(event.target.value);
                                                if (!isNaN(newValue)) {
                                                    flux.value = newValue; // Mettre à jour la valeur dans fluxHistory
                                                        // this.updateFluxDOM(); // Mettre à jour l'affichage DEBUG
                                                } else {
                                                    console.error('La valeur entrée n\'est pas un nombre valide.');
                                                }
                                        });
                                valueTd.appendChild(valueInput);

                                let buttonTd = document.createElement('td');
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
                this.addNewFlux(1);
                let panelDiv = document.getElementById(divId);
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