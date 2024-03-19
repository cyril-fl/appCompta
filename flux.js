export class flux {
    static lastId = 0;

    constructor(name = 'Libellé', value = 0.00, toAccount, fromAccount, date = new Date() , comment = ''){
        this.id = ++flux.lastId;
        this.name = name;
        this.isPositif = this.isPositifV(value);
        this.value = Math.abs(value);
        this.toAccount = toAccount;
        this.fromAccount = fromAccount;
        this.date = date; 
        this.comment = comment;
    };

