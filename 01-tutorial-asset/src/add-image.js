import JsNinja5k from './js-ninja-5k.jpeg';
import JsNinja10k from './js-ninja-10k.jpeg';

import altText from './altText.txt';

function addImage() {
  const img = document.createElement('img');
  img.alt = altText;
  img.width = 300;
  img.src = JsNinja5k;
  const body = document.querySelector('body');
  body.appendChild(img);

  const img10k = document.createElement('img');
  img10k.alt = 'js-ninja';
  img10k.width = 300;
  img10k.src = JsNinja10k;
  body.appendChild(img10k);
}

export default addImage;
