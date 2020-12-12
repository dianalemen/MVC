import * as Handlebars from 'handlebars';
import { Model } from './../model/model';
import { Currency } from './../model/model';

export interface View {
  view: HTMLElement | null | undefined;
  form: HTMLElement | null | undefined;
  model: Model;
}

export class InputsView {
  view: HTMLElement | null | undefined;
  form: HTMLElement | null | undefined;
  model: Model;

  constructor(model: Model) {
    this.model = model;
    this.createMockUp();
  }

  generateInputGroupTemplate(currency: Currency) {
    const maxResultValue = currency.rate * 100;
    const resultLabelId = `resultSliderLabel-${currency.name}`;
    Handlebars.registerHelper('resultLabelUpdater',
      () => `document.getElementById('${resultLabelId}').innerText = '${currency.name}' + ':' + this.form.resultRateSlider.value`
    );
    Handlebars.registerHelper('resultRateUpdater', () => `this.form.resultRateSlider.value = this.form.currentRateSlider.value * this.form.currentRateInput.value`);
    Handlebars.registerHelper('currentRateUpdater', () => `
      this.form.currentRateSlider.value = this.form.resultRateSlider.value / this.form.currentRateInput.value;
    `);
    Handlebars.registerHelper('test', () => `document.getElementById('result-rate-slider').max = 100 * this.form.currentRateInput.value`);
    Handlebars.registerHelper('resultMaxValue', () => `100 * this.form.currentRateInput.value`)
    Handlebars.registerHelper('triggerOnChange', () => `document.dispatchEvent(new Event('triggerView'))`)
    const template = Handlebars.compile(`
    <form id="form">
      <fieldset>
        <legend>{{currency.name}}</legend>
        1 Euro is 
        <input
          type="number"
          min="0"
          id="current-rate-input"
          value={{currency.rate}}
          name="currentRateInput"
          oninput=" {{ test }}; {{ resultRateUpdater }}; {{ resultLabelUpdater }};"
        />
        {{ currency.rate }} {{ currency.name }} <br>
        <div style="display:inline-block">
          <label for="current-rate-slider" style="display:block">Euro</label>
          <input
            type="number"
            min="0" max="100"
            id="current-rate-slider"
            name="currentRateSlider"
            oninput="{{ resultRateUpdater }}; {{ resultLabelUpdater }}"
          />
        </div>
        <div style="display: inline-block">
          <label for="result-rate-slider" id="{{resultLabelId}}" style="display:block">{{ currency.name }}</label>
          <input
            min="0"
            max="{{ maxResultValue }}"
            type="number"
            id="result-rate-slider"
            name="resultRateSlider"
            oninput="{{ resultLabelUpdater }} {{ currentRateUpdater }}"
          />
        </div>
        <br>
      </fieldset>
    </form>
    `);
    return template({ currency, maxResultValue, resultLabelId });
  }

  deleteFormIfExist() {
    const form = document.getElementById('form');

    if (form) {
      document.body.removeChild(form);
    }
  }

  createMockUp() {
    this.view = document.getElementById('view');

    this.deleteFormIfExist();
    const currenciesTemplate = this.model.currencies.map(currency => this.generateInputGroupTemplate(currency)).join('<br>');
    (this.view as HTMLElement).innerHTML = currenciesTemplate;
  }
}
