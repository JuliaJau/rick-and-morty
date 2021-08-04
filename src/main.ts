import './style.css';
import { createElement } from './utils/createElement';
import type { Character } from './types';
import { createCharacterCard } from './components/character/character';

const character: Character = {
  name: 'Jerry Smith',
  thumbnail: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
  status: 'Alive',
  species: 'Human',
  origin: 'Earth (C-137)',
};

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
        createCharacterCard(character),
        createCharacterCard(character),
        createCharacterCard(character),
      ],
    }),
  ],
});

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

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(mainElement);
}
