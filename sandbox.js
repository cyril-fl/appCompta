
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







addNewFluxDisplay() {
    let button = document.createElement('button');
        button.textContent = '+';
            button.addEventListener('click', () => {
                this.addNewFlux(1);
                    this.panelDisplay(); 
            });
        document.body.appendChild(button); // 

        //apparement c'est de l'insyncrone, je dois l'integrzer ainsi.

            // ici ca marche comme prévu : 
            // document.getElementById("rulesButton").addEventListener("click", async () => {
            //     try {
            //         let response = await fetch('./becode.json');
            //         let data = await response.json();
            //         maFonction(data); // Passer l'objet JSON directement à maFonction
            //     } catch (error) {
            //         console.error(error);
            //     }
            // });
            


            let divData = document.getElementById('data');
            let i =0;
            function maFonction(data) {
                if (!divData) {
                    divData = document.createElement('div');
                    divData.setAttribute('id', 'data');
                    document.body.appendChild(divData);
                } else {
                    // Effacer le contenu existant de divData
            
                }
                        console.log(i);
                    i++;
            
                // Itérer sur les paires clé-valeur de l'objet data
                Object.entries(data).forEach(([cle, valeur]) => {
                    let element = document.createElement('p');
                    element.textContent = `${cle}: ${valeur}`;
                    divData.appendChild(element);
                });
            }
            
            
            


}
