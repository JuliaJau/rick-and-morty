import './style.css';
import { createElement } from './utils/createElement';
import type { Character } from './types';
import { createCharacterCard } from './components/character/character';
import { getCharacters } from './utils/api';

const characters: Character[] = await getCharacters();

const characterContainer = createElement('div', {
  className: 'characterContainer',
  childElements: characters.map((character) => createCharacterCard(character)),
});

const searchbar = createElement('input', {
  placeholder: 'Search for a character',
  oninput: async () => {
    characterContainer.innerHTML = '';
    const search = searchbar.value;
    const filteredCharacters = await getCharacters(search);
    const filteredCharacterElements = filteredCharacters.map(
      (filteredCharacter) => createCharacterCard(filteredCharacter)
    );
    characterContainer.append(...filteredCharacterElements);
  },
});

const mainElement = createElement('main', {
  childElements: [
    createElement('div', {
      className: 'hero-image',
    }),
    createElement('h1', { innerText: 'The Characters' }),

    searchbar,
    characterContainer,
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
