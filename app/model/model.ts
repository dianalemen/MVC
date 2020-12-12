import { currencies } from '../mock/mock';

export interface Currency {
  name: string,
  rate: number
}

export interface Model {
  currencies: Currency[]
}

export class Independent implements Model {
  currencies: Currency[];

  constructor() {
    this.currencies = this.getCurrencies();
  }

  getCurrencies(): Currency[] {
    return currencies;
  }
}