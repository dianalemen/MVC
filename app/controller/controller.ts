import { Independent } from '../model/model';
import { MainView } from '../view/main';

import { InputsView } from '../view/inputs';
import { SlidersView } from '../view/sliders';

export class Controller {
  view;
  model;
  isSlidersView: boolean;
  isIndependentModel: boolean;

  constructor(isSlidersView: boolean, isIndependentModel: boolean) {
    this.model = new Independent();
    const currentView = isSlidersView ? SlidersView : InputsView;
    this.view = new MainView(currentView, this.model);
    this.isSlidersView = isSlidersView;
    this.isIndependentModel = isIndependentModel;

    document.addEventListener("triggerView", () => {
      new Controller(!this.isSlidersView, this.isIndependentModel)
    });

    document.addEventListener("triggerModel", () => {
      new Controller(this.isSlidersView, !this.isIndependentModel)
    });
  }

}
