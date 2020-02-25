import { Calculadora } from './modules/Calculadora.js';
let aux = "data";
//HOST
let host = {
    categorys: ['data','temperature','lengths','mass'],
    units: {
        data: ['megabyte','gigabyte','terabyte'],
        temperature: ['celsius', 'fahrenheit', 'kelvin'],
        lengths: ['centimeter', 'foot', 'inch', 'meter', 'kilometer', 'mile'],
        mass:['gram','kilogram','ounce','pound'],
    }
};

//UI
let cal = new Calculadora();
let input = document.querySelector('#input');
let output = document.querySelector('#output');
let categoryBox = document.querySelector('#categoryBox');
let inputText = document.querySelector('#inputText');
let outputText = document.querySelector('#outputText');
let r = null, isSame = null;


cal.category = aux;

const compute = () => {
    isSame = input.value == output.value;
    if (!isSame && input.value != "") {
        r = cal.calc(inputText.value, input.value, output.value);
        outputText.value = r;
    } 
    if (inputText.value == "") outputText.value = "";
  
   
}
categoryBox.innerHTML = '';
host.categorys.map(_category => {
    categoryBox.innerHTML += `
        <option value="${_category}">${_category}</option>
    `;
});
const renderOptions = (category) => {
    output.innerHTML = '';
    input.innerHTML = '';

        host.units[category].map(unit => {
            input.innerHTML += `
            <option value="${unit}">${unit}</option>
        `;
            output.innerHTML += `
            <option value="${unit}">${unit}</option>
        `;

    });
    compute();

};

renderOptions(cal.category);

categoryBox.addEventListener('input', () => {
    cal.category = categoryBox.value;
    renderOptions(cal.category);
});


input.addEventListener('input', compute);
output.addEventListener('input', compute);
inputText.addEventListener('keyup', compute);




