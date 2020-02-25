
import {Controller } from './Controller.js';
class Calculadora extends Controller{
    calc(data,input,output) {
        return this.resolve(data,input,output);
    }
}


export { Calculadora };
