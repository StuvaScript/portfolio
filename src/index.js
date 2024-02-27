import './normalize.css';
import './style.css';
import mobMen from './images/mobile-menu.png';
import cal from './images/calculatron.png';
import conv from './images/conversion-bot.png';
import dog from './images/dog.png';
import weather from './images/weather-app-pic.png';
import todo from './images/todo.png';
import resumePic from './images/page.svg';
import pdf from './files/Resume.pdf';
import bigIconGithub from './icons/github.png';
import bigIconEmail from './icons/email.png';
import bigIconLinkedIn from './icons/linkedin.png';
import iconHtml from './icons/html-5.png';
import iconCss from './icons/css-3.png';
import iconJs from './icons/js.png';
import iconNode from './icons/node-logo.svg';
import iconWebpack from './icons/webpack.svg';
import iconVscode from './icons/icons8-vs-code.svg';
import iconGithub from './icons/icons8-github.svg';
import iconDevtools from './icons/browser.png';
import iconEslint from './icons/eslint.svg';
import iconPrettier from './icons/prettier.svg';
import profilePic from './images/stu.jpg';
import arrow from './icons/arrow.png';
import favicon from './icons/cool.svg';

// ! ``**Profile picture**``

const profileImg = document.querySelector('#profile-img');
profileImg.setAttribute('src', profilePic);

// ! ``**Card pictures**``

const mobMenImg = document.querySelector('.mobMenImg');
mobMenImg.setAttribute('src', mobMen);

const calImg = document.querySelector('.calImg');
calImg.setAttribute('src', cal);

const convImg = document.querySelector('.convImg');
convImg.setAttribute('src', conv);

const dogImg = document.querySelector('.dogImg');
dogImg.setAttribute('src', dog);

const weatherImg = document.querySelector('.weatherImg');
weatherImg.setAttribute('src', weather);

const todoImg = document.querySelector('.todoImg');
todoImg.setAttribute('src', todo);

const resPic = document.querySelector('.res-pic');
resPic.setAttribute('src', resumePic);

// ! ``**PDF file**``

const pdfResume = document.querySelector('.res-anchor');
pdfResume.setAttribute('href', pdf);

// ! ``**Icons**``

const github = document.querySelector('.github-icon');
github.setAttribute('src', bigIconGithub);

const email = document.querySelector('.email-icon');
email.setAttribute('src', bigIconEmail);

const linkedin = document.querySelector('.linkedin-icon');
linkedin.setAttribute('src', bigIconLinkedIn);

const theIconHtml = document.querySelector('#icon-html');
theIconHtml.setAttribute('src', iconHtml);

const theIconCss = document.querySelector('#icon-css');
theIconCss.setAttribute('src', iconCss);

const theIconJs = document.querySelector('#icon-js');
theIconJs.setAttribute('src', iconJs);

const theIconNode = document.querySelector('#icon-node');
theIconNode.setAttribute('src', iconNode);

const theIconWebpack = document.querySelector('#icon-webpack');
theIconWebpack.setAttribute('src', iconWebpack);

const theIconVscode = document.querySelector('#icon-vscode');
theIconVscode.setAttribute('src', iconVscode);

const theIconGithub = document.querySelector('#icon-github');
theIconGithub.setAttribute('src', iconGithub);

const theIconDevtools = document.querySelector('#icon-devtools');
theIconDevtools.setAttribute('src', iconDevtools);

const theIconEslint = document.querySelector('#icon-eslint');
theIconEslint.setAttribute('src', iconEslint);

const theIconPrettier = document.querySelector('#icon-prettier');
theIconPrettier.setAttribute('src', iconPrettier);

const theIconArrow = document.querySelector('.arrow');
theIconArrow.setAttribute('src', arrow);

// ! ``**Favicon**``

const faviconImg = document.querySelector('link[rel="shortcut icon"]');
faviconImg.setAttribute('href', favicon);
