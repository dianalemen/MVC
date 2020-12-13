import { currencies } from '../mock/mock';

export interface Currency {
  name: string,
  rate: number
}

export interface ModelInterface {
  currencies: Currency[];
}

export class Model implements Model {
  currencies: Currency[];

  constructor() {
    this.currencies = this.getCurrencies();
  }

  getCurrencies(): Currency[] {
    return currencies;
  }

  updateCurrencies(value: number, currencyName: string | null = null): void {
    const getSingleCurrencyUpdated = () => {
      return this.currencies.map((currency) => {
        if (currency.name === currencyName) {
          return { name: currencyName, rate: value }
        }
        return currency;
      })
    };

    const getAllCurrencyUpdated = () => {
      return this.currencies.map(currency => ({ ...currency, rate: value}))
    }

    this.currencies = currencyName ? getSingleCurrencyUpdated() : getAllCurrencyUpdated();
  }
}
