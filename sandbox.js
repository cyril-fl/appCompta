
class Flux {
    static lastId = 0;

    constructor(name = 'Libellé', value = 0.00, toAccount, fromAccount, date = new Date(), comment = '') {
        this.id = ++Flux.lastId;
        this.name = name;
        this.isPositif = this.isPositifV(value);
        this.value = Math.abs(value);
        this.toAccount = toAccount;
        this.fromAccount = fromAccount;
        this.date = date;
        this.comment = comment;
    };

        isPositifV(value) {
            if (isNaN(value)) {
                return NaN;
            } else if (value > 0) {
                return true;
            } else if (value < 0) {
                return false;
            }
        };
}

class Page {
    static pageId = 0;

    constructor() {
        this.id = ++Page.pageId;
    }
}

class Panel extends Page {
    constructor() {
        super ();
        this.fluxHistory = [];
        // this.AccountInOut = True / False => donne is poisitv 
        // this.AccountNum = cree un id  de compter fictif pour gerer ex : epargne, facture etct 
        // this.name = revenu / frais , etc ... 

        //     constructor() {
//         // numero
//         //historique de flux 
//         //compte 
    };

        panelDisplay() {
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
                                                this.updateFluxDOM(); // Mettre à jour l'affichage
                                        } else {
                                            console.error('La valeur entrée n\'est pas un nombre valide.');
                                        }
                                });
                        valueTd.appendChild(valueInput);

                    tableIncome.appendChild(nameTd);
                    tableIncome.appendChild(valueTd);
                document.body.appendChild(tableIncome);
            });
        };

        updateFluxDOM() {
            // Trouver l'élément <pre> existant
            let fluxDOM = document.querySelector('#fluxData');
                if (fluxDOM) {
                    fluxDOM.textContent = JSON.stringify(this.fluxHistory, null, 2);
                } else {
                    fluxDOM = document.createElement('pre');
                        fluxDOM.textContent = JSON.stringify(this.fluxHistory, null, 2);
                            fluxDOM.setAttribute('id', 'fluxData');
                                document.body.appendChild(fluxDOM);
                };
        };
}

document.addEventListener('DOMContentLoaded', function() {
    // Crée une instance de la classe Page
    let page = new Page();
    let panelIn = new Panel();
        page.panelIn = panelIn;
    
        console.log(page);

});

// // Attend que le document soit entièrement chargé
// document.addEventListener('DOMContentLoaded', function() {
//     // Crée une instance de la classe Page
//     let panelTest = new panel();

//     // Ajoute des données initiales à pageTest.fluxHistory
//     for (let i = 0; i < 3; i++) {
//         let newFlux = new flux(`Valeur ${i+1}`,0);
//         panelTest.fluxHistory.push(newFlux);
//     }

//     // Appelle pageDisplayV2 pour afficher les données initiales
//     panelTest.panelDisplay();

//     // Appelle updateFluxDOM pour mettre à jour l'affichage
//     panelTest.updateFluxDOM();
// });



//___



import { Flux } from './flux.js';
import { Page } from './page.js';

export class Panel extends Page {
    constructor(parentId, name = `PanelPage${parentId}`) {
        super();
        this.parentId = parentId;
        this.name = name; 
        this.fluxHistory = [];
    }

    newFlux(nbr) {
        for (let i = 0; i < nbr; i++) { // Utilisez 'let' pour déclarer la variable 'i'
            let newFlux = new Flux(`Valeur ${i + 1}`, 0);
            this.fluxHistory.push(newFlux);
        }
    };
    
    panelDisplay() {
        let panelName = document.createElement('H1');
            panelName.textContent = this.name;
            document.body.appendChild(panelName);
                this.panelArrayDisplay();
    };

    panelArrayDisplay() {
        if (this.fluxHistory.length === 0) {
            console.log('fluxHistory vide')
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

    addNewFlux() {
        // mettre un bouton on clic 
        // add un fluc avec un bouton +
    }

    updateFluxDOM() {
        // Trouver l'élément <pre> existant
        let fluxDOM = document.querySelector('#fluxData');
            if (fluxDOM) {
                fluxDOM.textContent = JSON.stringify(this.fluxHistory, null, 2);
            } else {
                fluxDOM = document.createElement('pre');
                    fluxDOM.textContent = JSON.stringify(this.fluxHistory, null, 2);
                        fluxDOM.setAttribute('id', 'fluxData');
                            document.body.appendChild(fluxDOM);
            };
    };
}



//



export class Page {
    static pageId = 0;

    constructor() {
        this.id = ++Page.pageId;
        // this.panelIn = new Panel(this.id, 'PanelIn'); // Crée une nouvelle instance de Panel pour panelIn
        // this.panelOut = new Panel(this.id, 'PanelOut'); // Crée une nouvelle instance de Panel pour panelOut
    }

    pageDisplay() {
        // this.panelIn.panelDisplay();
        // this.panelOut.panelDisplay();
    }
}
