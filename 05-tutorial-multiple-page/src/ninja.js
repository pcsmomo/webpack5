import React from 'react';

import Heading from './components/heading/heading.js';
import NinjaImage from './components/ninja-image/ninja-image.js';

const heading = new Heading();
heading.render('ninja');

const ninjaImage = new NinjaImage();
ninjaImage.render();
