import { Independent } from './model/independent';
import { InputsView } from './view/inputs';
import { SlidersView } from './view/sliders';
import { Controller } from './controller/controller';

window.addEventListener('load', () => {
    const model = new Independent();
    const view = new SlidersView(model);
    new Controller(view, model)
});