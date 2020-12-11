import { model } from '../model/independent';
import { View } from '../view/inputs';

export class Controller {
  view;
  model;

  constructor(view: View, model: model) {
    this.view = view;
    this.model = model;
  }
}
