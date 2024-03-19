import { Flux } from './flux.js';
import { Page } from './page.js';

export class Panel {
    constructor(pageId, name) {
        this.pageId = pageId;
        this.name = name; 
        this.fluxHistory = [];
    }

        addNewFlux(nbr) {
            for (let i = 0; i < nbr; i++) {
                let newFlux = new Flux(`Valeur ${i + 1}`, 0);
                this.fluxHistory.push(newFlux);
            };
        };

        addNewFluxDisplay() {
            let button = document.createElement('button');
                button.textContent = '+';
                    button.addEventListener('click', () => {
                        this.addNewFlux(1);
                            this.panelDisplay(); 
                    });
                document.body.appendChild(button);
        }

        panelDisplay() {

            let panelName = document.createElement('H1');
                panelName.textContent = this.name;
                document.body.appendChild(panelName);
                    this.panelArrayDisplay();
                    this.addNewFluxDisplay();
        };

        panelArrayDisplay() {
            if (this.fluxHistory.length === 0) {
                fluxContainer.textContent = 'Aucun flux disponible';
            } else {
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
                                        this.updateFluxDOM(); // Mettre à jour l'affichage
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
                                                    this.updateFluxDOM(); // Mettre à jour l'affichage DEBUG
                                            } else {
                                                console.error('La valeur entrée n\'est pas un nombre valide.');
                                            }
                                    });
                            valueTd.appendChild(valueInput);
    
                        tableIncome.appendChild(nameTd);
                        tableIncome.appendChild(valueTd);
                    document.body.appendChild(tableIncome);
                });
            }
    
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