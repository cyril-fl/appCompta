
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


class Panel extends Page {
    constructor() {
        super ();
        this.fluxHistory = [];
        // this.AccountInOut = True / False => donne is poisitv 
        // this.AccountNum = cree un id  de compter fictif pour gerer ex : epargne, facture etct 
        // this.name = revenu / frais , etc ... 

//         // numero
//         //compte 
    };

}

