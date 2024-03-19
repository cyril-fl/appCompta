class flux {
    static lastId = 0;

    constructor(name = 'Libellé', value = 0.00, toAccount, fromAccount, date = new Date(), comment = '') {
        this.id = ++flux.lastId;
        this.name = name;
        this.isPositif = this.isPositifV(value);
        this.value = Math.abs(value);
        this.toAccount = toAccount;
        this.fromAccount = fromAccount;
        this.date = date;
        this.comment = comment;
    }

    isPositifV(value) {
        if (value > 0) {
            return true;
        } else if (value < 0) {
            return false;
        } else if (isNaN(value)) { // Utiliser isNaN() pour tester si value est NaN
            return NaN;
        }
    }
}

export class Page {
    constructor() {
        this.fluxHistory = [];
    }

    pageDisplayV2() {
        this.fluxHistory.forEach(flux => {
            let name = flux.name;
            let value = flux.value;

            // Créer une ligne de tableau (<tr>)
            let tableIncome = document.createElement('tr');

            // Créer une cellule de tableau pour le nom (<td>)
            let nameTd = document.createElement('td');
            let nameInput = document.createElement('input');
            nameInput.setAttribute('type', 'text');
            nameInput.setAttribute('placeholder', name);
            nameInput.addEventListener('input', event => {
                flux.name = event.target.value; // Mettre à jour le nom dans fluxHistory
                this.updateFluxDOM(); // Mettre à jour l'affichage
            });
            nameTd.appendChild(nameInput);

            // Créer une cellule de tableau pour la valeur (<td>)
            let valueTd = document.createElement('td');
            let valueInput = document.createElement('input');
            valueInput.setAttribute('type', 'text');
            valueInput.setAttribute('placeholder', value);
            valueInput.addEventListener('input', event => {
                flux.value = parseFloat(event.target.value); // Mettre à jour la valeur dans fluxHistory
                this.updateFluxDOM(); // Mettre à jour l'affichage
            });
            valueTd.appendChild(valueInput);

            // Ajouter les cellules de tableau à la ligne de tableau
            tableIncome.appendChild(nameTd);
            tableIncome.appendChild(valueTd);

            // Ajouter la ligne de tableau au corps du document
            document.body.appendChild(tableIncome);
        });
    }

    updateFluxDOM() {
        // Trouver l'élément <pre> existant
        let fluxDOM = document.querySelector('#fluxData');

        // Mettre à jour le contenu de l'élément <pre>
        if (fluxDOM) {
            fluxDOM.textContent = JSON.stringify(this.fluxHistory, null, 2);
        } else {
            // Si l'élément <pre> n'existe pas, le créer et l'ajouter au corps du document
            fluxDOM = document.createElement('pre');
            fluxDOM.textContent = JSON.stringify(this.fluxHistory, null, 2);
            fluxDOM.setAttribute('id', 'fluxData');
            document.body.appendChild(fluxDOM);
        }
    }
}

// Exemple d'utilisation
let pageTest = new Page();

// Afficher les données initiales

for (let i = 0; i < 3; i++) {
    let newFlux = new flux(`Valeur ${i+1}`,0); // Correction de la variable newFluw en newFlux
    pageTest.fluxHistory.push(newFlux);
}

pageTest.pageDisplayV2();
pageTest.updateFluxDOM();




// pagetest.pageDisplay();

//     let p_ = document.createElement('p')
//     p_.textContent = '________'
//     document.body.appendChild(p_);



