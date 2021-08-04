import style from './character.module.css';
import type { Character } from '../../types';
import { createElement } from '../../utils/createElement';

export function createCharacterCard({
  thumbnail,
  name,
  status,
  species,
  origin,
}: Character): HTMLElement {
  return createElement('div', {
    className: style.card,
    childElements: [
      createElement('img', {
        className: style.image,
        src: thumbnail,
      }),
      createElement('article', {
        className: style.info,
        childElements: [
          createElement('h2', { innerText: name }),
          createElement('div', {
            childElements: [
              createElement('h5', { innerText: 'Status:' }),
              createElement('p', {
                innerText: `${
                  status === 'Alive' ? '💚' : '💀'
                } ${status} - ${species}`,
              }),
            ],
          }),

          createElement('h5', { innerText: 'Origin' }),
          createElement('p', { innerText: origin }),
        ],
      }),
    ],
  });
}
