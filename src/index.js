import './normalize.css';
import './style.css';
import rps from './images/rps.png';
import cal from './images/calculatron.png';
import conv from './images/conversion-bot.png';
import lib from './images/library.png';
import rest from './images/restaurant-page.png';
import ttt from './images/tictactoe.png';
import resumePic from './images/resume-pic.png';
import pdf from './files/My-Technical-Resume.pdf';
import iconGithub from './icons/github.png';
import iconEmail from './icons/email.png';
import iconLinkedIn from './icons/linkedin.png';

// // Unused code gets this badass strikeout

// * ``**Card pictures**``

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

// * ``**PDF file**``

const pdfResume = document.querySelector('.res-anchor');
pdfResume.setAttribute('href', pdf);

// * ``**Icons**``

const github = document.querySelector('.github-icon');
github.setAttribute('src', iconGithub);

const email = document.querySelector('.email-icon');
email.setAttribute('src', iconEmail);

const linkedin = document.querySelector('.linkedin-icon');
linkedin.setAttribute('src', iconLinkedIn);
