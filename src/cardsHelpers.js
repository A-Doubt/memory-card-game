import { nanoid } from 'nanoid';

export function createCard(name, id) {
	return {
		name: name,
		id: id,
		clicked: false
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


export function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(i)
shuffleArray(i)
console.log(i)
