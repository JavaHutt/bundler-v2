import _ from 'lodash';
import './style.css';
import icon from './img.png';

const component = function() {
    const element = document.createElement('div');
    const myIcon = new Image(150, 150);

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');
    myIcon.src = icon;
    myIcon.classList.add('image');

    element.appendChild(myIcon);
    
    return element
}

document.body.appendChild(component());