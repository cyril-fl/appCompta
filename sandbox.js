let tableIncome = document.createElement('tr');
let nameTd = document.createElement('td');
    let nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('placeholder', name);
            nameInput.addEventListener('input', event => {
                flux.name = event.target.value; // Mettre à jour le nom dans fluxHistory
            });
    nameTd.appendChild(nameInput);



    let buttonTd = document.createElement('td');
        buttonTd.setAttribute('id',`buttonTd${id}`)
        buttonTd.appendChild(this.addNewFluxDisplay(divId));

tableIncome.appendChild(nameTd);
tableIncome.appendChild(valueTd);
tableIncome.appendChild(buttonTd);