import type { AllCharactersFromAPI, Character } from '../../src/types';

export async function getCharacters(name?: string): Promise<Character[]> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name ? name : ''}`
  );
  const data: AllCharactersFromAPI = await response.json();
  const characters = data.results;
  const formattedCharacters: Character[] = characters.map((character) => {
    const formattedCharacter: Character = {
      name: character.name,
      origin: character.origin.name,
      species: character.species,
      status: character.status,
      thumbnail: character.image,
    };
    return formattedCharacter;
  });

  return formattedCharacters;
}
