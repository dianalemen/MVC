import * as Handlebars from 'handlebars';
import { ModelInterface } from '../model/model';

export class MainView {
  app: HTMLElement | null | undefined;
  form: HTMLElement | null | undefined;
  model: ModelInterface;
  currentView;
  isSlidersView: boolean;
  isIndependentModel: boolean;

  constructor(currentView: any, model: ModelInterface, isSlidersView: boolean, isIndependentModel: boolean) {
    this.model = model;
    this.currentView = currentView;
    this.isSlidersView = isSlidersView;
    this.isIndependentModel = isIndependentModel;
    this.createMockUp();
  }

  generateMainTemplate() {
    Handlebars.registerHelper('triggerViewChange', () => `document.dispatchEvent(new Event('triggerView'))`);
    Handlebars.registerHelper('triggerModelChange', () => `document.dispatchEvent(new Event('triggerModel'))`)

    Handlebars.registerHelper('sliderView', () => `${this.isSlidersView}
      ? document.getElementById('togViewBtn').removeAttribute("checked")
      : document.getElementById('togViewBtn').setAttribute("checked", "checked")`)

    Handlebars.registerHelper('independentModel', () => `${this.isIndependentModel}
      ? document.getElementById('togModelBtn').setAttribute("checked", "checked")
      : document.getElementById('togModelBtn').removeAttribute("checked")`)

    const template = Handlebars.compile(`
    <label><input type="checkbox" id="togViewBtn" checked onchange="{{ triggerViewChange }}; {{ sliderView }}"><span>Slider view on</span></label>
      <br />
    <label><input type="checkbox" id="togModelBtn" checked onchange="{{ triggerModelChange }}; {{ independentModel }}"><span>Single model on</span></label>
    <div id="view"></div>
    `);
    return template({ isSlidersView: this.isSlidersView, isIndependentModel: this.isIndependentModel});
  }


  createMockUp() {
    this.app = document.getElementById('app');
  
    (this.app as HTMLElement).innerHTML = this.generateMainTemplate();
    new this.currentView(this.model);
  }
}
