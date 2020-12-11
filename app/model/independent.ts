import { currencies } from '../mock/mock';

export interface currency {
  name: string,
  rate: number
}

export interface model {
  currencies: currency[]
}

export class Independent implements model {
  currencies: currency[];

  constructor() {
    this.currencies = this.getCurrencies();
  }

  getCurrencies(): currency[] {
    return currencies;
  }
}