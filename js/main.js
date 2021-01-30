import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/renderSocials.js';
import { clock } from './components/clock.js';

clock('.clock');
renderSocials('.social-row', socialsData);