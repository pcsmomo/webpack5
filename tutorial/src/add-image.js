import JsNinja from './js-ninja.jpeg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'js-ninja';
  img.width = 300;
  img.src = JsNinja;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
