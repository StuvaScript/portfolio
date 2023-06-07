import './normalize.css';
import './style.css';
import rps from './images/rps.png';
import cal from './images/calculatron.png';
import conv from './images/conversion-bot.png';
import lib from './images/library.png';
import rest from './images/restaurant-page.png';
import ttt from './images/tictactoe.png';
import resumePic from './images/resume-pic.png';

const rpsImg = document.querySelector('.rpsImg');
rpsImg.setAttribute('src', rps);

const calImg = document.querySelector('.calImg');
calImg.setAttribute('src', cal);

const convImg = document.querySelector('.convImg');
convImg.setAttribute('src', conv);

const libImg = document.querySelector('.libImg');
libImg.setAttribute('src', lib);

const restImg = document.querySelector('.restImg');
restImg.setAttribute('src', rest);

const tttImg = document.querySelector('.tttImg');
tttImg.setAttribute('src', ttt);

const resPic = document.querySelector('.res-pic');
resPic.setAttribute('src', resumePic);
