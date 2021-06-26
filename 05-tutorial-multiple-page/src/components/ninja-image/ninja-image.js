import Ninja from './ninja.jpeg';
import './ninja-image.scss';

class NinjaImage {
  render() {
    const img = document.createElement('img');
    img.src = Ninja;
    img.alt = 'Js Ninja';
    img.classList.add('ninja-image');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default NinjaImage;
