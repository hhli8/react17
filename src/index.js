import "./index.css";
import "./btn.css";
import "./index.scss";
// const style = require('./index.css')
// console.log(style, 'css')

import { Print } from './print.js'

import _ from 'lodash'
// import { join } from 'lodash'

function component () {
  const Input = document.createElement('input');
  const element = document.createElement('div');
  // element.innerHTML = join(['Hello', 'webpack'], ' ');
  import('lodash').then(({ default: _ }) => {
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  })
  element.classList.add('btn');
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = Print;
  element.appendChild(btn);
  element.appendChild(Input);
  return element
}
document.body.appendChild(component())
