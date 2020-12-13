import { Model } from '../model/model';
import { MainView } from '../view/main';

import { InputsView } from '../view/inputs';
import { SlidersView } from '../view/sliders';

export class Controller {
  view;
  model;
  isSlidersView: boolean;
  isIndependentModel: boolean;

  constructor() {
    this.isIndependentModel = false;
    this.isSlidersView = true;
    this.model = new Model();
    const currentView = this.isSlidersView ? SlidersView : InputsView;
    this.view = new MainView(currentView, this.model, this.isSlidersView, this.isIndependentModel);

    document.addEventListener("triggerView", () => {
      this.isSlidersView = !this.isSlidersView;
      this.view = new MainView(this.isSlidersView ? SlidersView : InputsView, this.model, this.isSlidersView, this.isIndependentModel);
    });

    document.addEventListener("triggerModel", () => {
      this.isIndependentModel= !this.isIndependentModel;
      this.view = new MainView(this.isSlidersView ? SlidersView : InputsView, this.model, this.isSlidersView, this.isIndependentModel);
    });

    document.addEventListener("triggerCurrencyChange", ((event: CustomEvent) => {
      const { detail } = event;
      if (this.isIndependentModel) {
        this.model.updateCurrencies(detail.value, detail.currencyName)
      } else {
        this.model.updateCurrencies(detail.value)
        this.view = new MainView(this.isSlidersView ? SlidersView : InputsView, this.model, this.isSlidersView, this.isIndependentModel);
      }
    }) as EventListener);
  }

}
