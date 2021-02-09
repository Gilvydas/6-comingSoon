import { clock } from './components/clock.js';
import { progressBarData } from './data/progressBarData.js';
import { ProgressBar } from './components/ProgressBar.js'
import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/renderSocials.js';
import { Forms } from './components/forms/Forms.js'
clock('.clock', '01-04 14:00:00');
renderSocials('.social-row', socialsData);
new ProgressBar('.left-column', progressBarData);
new Forms();






