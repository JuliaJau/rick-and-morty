import './style.css';
import { createElement } from './utils/createElement';
import type { Character } from './types';
import { createCharacterCard } from './components/character/character';

const characters: Character[] = [
  {
    name: 'Jerry Smith',
    thumbnail: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
  },

  {
    name: 'Rick Sanchez',
    thumbnail: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
  },

  {
    name: 'Morty Smith"',
    thumbnail: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
  },

  {
    name: 'Summer Smith"',
    thumbnail: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
  },

  {
    name: 'Beth Smith"',
    thumbnail: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
  },
  {
    name: 'Abadango Cluster Princess"',
    thumbnail: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
  },
];

const mainElement = createElement('main', {
  childElements: [
    createElement('div', {
      className: 'hero-image',
    }),
    createElement('h1', { innerText: 'The Characters' }),

    createElement('input', {
      placeholder: 'Search for a character',
      className: 'searchbar',
    }),
    createElement('div', {
      className: 'characterContainer',
      childElements: characters.map((character) =>
        createCharacterCard(character)
      ),
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
