import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/renderSocials.js';
import { clock } from './components/clock.js';

clock('.clock', '01-04 14:00:00');
renderSocials('.social-row', socialsData);