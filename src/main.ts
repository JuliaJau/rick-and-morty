import './style.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', { innerText: 'Rick and Morty' }),
    createElement('p', { innerText: 'Characters' }),
    createElement('input', {
      placeholder: 'Search for a character',
      className: 'searchbar',
    }),
    createElement('div', {
      className: 'characterContainer',
      childElements: [
        createCharacterCard(),
        createCharacterCard(),
        createCharacterCard(),
      ],
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');
/*
const mainElement = document.createElement('main');

const title = document.createElement('h1');
title.innerText = 'Rick and Morty';

const para = document.createElement('p');
para.innerText = 'Characters';

const input = document.createElement('input');
input.placeholder = 'Search for a character...';

mainElement.append(title, para, input);
*/

if (app !== null) {
  app.append(mainElement);
}
