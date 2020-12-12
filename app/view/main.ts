import * as Handlebars from 'handlebars';
import { Model } from '../model/model';

export class MainView {
  app: HTMLElement | null | undefined;
  form: HTMLElement | null | undefined;
  model: Model;
  current;

  constructor(current: any, model: Model) {
    this.model = model;
    this.current = current;
    this.createMockUp();
  }

  generateMainTemplate() {
    Handlebars.registerHelper('triggerViewChange', () => `document.dispatchEvent(new Event('triggerView'))`);
    Handlebars.registerHelper('triggerModelChange', () => `document.dispatchEvent(new Event('triggerModel'))`)

    const template = Handlebars.compile(`
    <label><input type="checkbox" id="togViewBtn" onchange="{{triggerViewChange}}"><span>Switch view</span></label>
      <br />
    <label><input type="checkbox" id="togModelBtn" onchange="{{triggerModelChange}}"><span>Switch model</span></label>
    <div id="view"></div>
    `);
    return template({});
  }


  createMockUp() {
    this.app = document.getElementById('app');

    (this.app as HTMLElement).innerHTML = this.generateMainTemplate();
    new this.current(this.model);
  }
}
