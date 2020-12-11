import { model } from './../model/independent';

export interface currency {
  name: string,
  rate: number
}

export interface View {
  app: HTMLElement | null | undefined;
  form: HTMLElement | null | undefined;
  currentExchangeRateInput: HTMLElement | null | undefined;
  euroInput: HTMLElement | null | undefined;
  currentExchangeLabel: HTMLElement | null | undefined;
  euroInputLabel: HTMLElement | null | undefined;
  dMInput: HTMLElement | null | undefined;
  dMInputLabel: HTMLElement | null | undefined;
}

export class InputsView {
  app: HTMLElement | null | undefined;
  form: HTMLElement | null | undefined;
  currentExchangeRateInput: HTMLElement | null | undefined;
  euroInput: HTMLElement | null | undefined;
  currentExchangeLabel: HTMLElement | null | undefined;
  euroInputLabel: HTMLElement | null | undefined;
  dMInput: HTMLElement | null | undefined;
  dMInputLabel: HTMLElement | null | undefined;
  controller: any;
  model: model;

  constructor(model: model) {
    this.model = model;
    this.createMockUp()
  }

  createMockUp() {
    this.app = document.getElementById('app');
    this.form = document.createElement('form');

    this.currentExchangeRateInput = document.createElement('input');
    this.currentExchangeRateInput.setAttribute('type', 'number');
    this.currentExchangeRateInput.setAttribute('id', `current-rate-${1}`);

    this.euroInput = document.createElement('input');
    this.euroInput.setAttribute('type', 'number');
    this.euroInput.setAttribute('id', `euro-${1}`);

    this.dMInput = document.createElement('input');
    this.dMInput.setAttribute('type', 'number');
    this.dMInput.setAttribute('id', `dMInput`);

    this.currentExchangeLabel = document.createElement('label');
    this.currentExchangeLabel.setAttribute('for', `current-rate--${1}`);
    this.currentExchangeLabel.appendChild(document.createTextNode('Euro is'));

    this.euroInputLabel = document.createElement('label');
    this.euroInputLabel.setAttribute('for', `euro-${1}`);
    this.euroInputLabel.appendChild(document.createTextNode('Euro'));

    this.dMInputLabel = document.createElement('label');
    this.dMInputLabel.setAttribute('for', `dm-${1}`);
    this.dMInputLabel.appendChild(document.createTextNode(`${1}`));

    this.form.append(
      this.currentExchangeRateInput,
      this.euroInput,
      this.dMInput,
      this.currentExchangeLabel,
      this.euroInputLabel,
      this.dMInputLabel
    );
    this.app && this.app.append(this.form);
  }
}
