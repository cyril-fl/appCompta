import { Page } from './page.js';
import { Panel } from './panel.js';

export class Flux {
    static lastId = 0;

    constructor(panelId, name = 'Libellé', value = 0.00, toAccount, fromAccount, date = new Date(), comment = '') {
        this.panelId = panelId;
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
        };
    };
};