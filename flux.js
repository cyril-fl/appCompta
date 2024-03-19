pageDisplayV2() {
    this.fluxHistory.forEach(flux => {
        let name = flux.name;
            let value = flux.value;

        // Créer une ligne de tableau (<tr>)
        let tableIncome = document.createElement('tr');
            let tableIncomeTd = document.createElement('td'); // Créer une cellule de tableau (<td>)
                tableIncomeTd.textContent = 'text'; // Assigner du contenu à la cellule de tableau
                    tableIncome.appendChild(tableIncomeTd); // Ajouter la cellule de tableau à la ligne de tableau
                        document.body.appendChild(tableIncome); // Ajouter la ligne de tableau au corps du document

        // Créer un élément input
        let nameInput = document.createElement('input');
            nameInput.setAttribute('type', 'text'); // Définir l'attribut type
                nameInput.setAttribute('placeholder', `${name}`); // Définir l'attribut placeholder
                document.body.appendChild(nameInput); // Ajouter l'élément input au corps du document

        // Créer un élément input
        let valueInput = document.createElement('input');
            valueInput.setAttribute('type', 'text'); // Définir l'attribut type
                valueInput.setAttribute('placeholder', `${value}`); // Définir l'attribut placeholder
                    document.body.appendChild(valueInput); // Ajouter l'élément input au corps du document
    });   

}