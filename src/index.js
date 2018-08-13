import _ from 'lodash';
import printMe from './print.js';
// import './style.css';
// import icon from './img.png';

const component = function() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // const myIcon = new Image(150, 150);

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    btn.innerHTML = 'click me and check the console!';
    btn.onclick = printMe;
    // element.classList.add('hello');
    // myIcon.src = icon;
    // myIcon.classList.add('image');

    element.appendChild(btn);
    
    return element
}

document.body.appendChild(component());