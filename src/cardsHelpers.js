import { nanoid } from 'nanoid';

export function createCard(name, id) {
    return {
      name: name,
      id: id
    }
  }

export function allNewCards() {
    const cardsArray = []
    cardsArray.push(createCard('Charmander', nanoid()));
    cardsArray.push(createCard('Squirtle', nanoid()));
    cardsArray.push(createCard('Ditto', nanoid()));
    cardsArray.push(createCard('Onyx', nanoid()));
    cardsArray.push(createCard('Lucario', nanoid()));
    cardsArray.push(createCard('Zapdos', nanoid()));
    return cardsArray;
  };
