import _ from 'lodash';

import Heading from './components/heading/heading.js';
import NinjaImage from './components/ninja-image/ninja-image.js';

const heading = new Heading();
heading.render(_.upperFirst('ninja'));

const ninjaImage = new NinjaImage();
ninjaImage.render();
