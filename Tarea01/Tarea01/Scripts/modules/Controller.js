import { Formula} from './Formula.js';
class Controller extends Formula {
    resolve(data, input, output) {
        return this.compute(data, input, output);
    }
}
export { Controller };

