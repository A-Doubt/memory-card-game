import { nanoid } from 'nanoid';

export function createCard(name, number, id) {
	return {
		name: name,
		number: number,
		id: id,
		clicked: false
	}
}

export function allNewCards() {
	const cardsArray = []
	cardsArray.push(createCard('Charizard', '0006', nanoid()));
	cardsArray.push(createCard('Blastoise', '0009', nanoid()));
	cardsArray.push(createCard('Metapod', '0011', nanoid()));
	cardsArray.push(createCard('Ekans', '0023', nanoid()));
	cardsArray.push(createCard('Pikachu', '0025',nanoid()));
	cardsArray.push(createCard('Sandslash', '0028', nanoid()));
	cardsArray.push(createCard('Nidoking', '0034', nanoid()));
	cardsArray.push(createCard('Psyduck', '0054', nanoid()));
	cardsArray.push(createCard('Poliwag', '0060', nanoid()));
	cardsArray.push(createCard('Tentacool', '0072', nanoid()));
	cardsArray.push(createCard('Slowpoke', '0079',nanoid()));
	cardsArray.push(createCard('Dewgong', '0087', nanoid()));
	cardsArray.push(createCard('Haunter', '0093', nanoid()));
	cardsArray.push(createCard('Hypno', '0097', nanoid()));
	cardsArray.push(createCard('Scyther', '0123', nanoid()));
	cardsArray.push(createCard('Ditto', '0132', nanoid()));
	cardsArray.push(createCard('Kabutops', '0141', nanoid()));
	cardsArray.push(createCard('Articuno', '0144',nanoid()));
	cardsArray.push(createCard('Zapdos', '0145', nanoid()));
	cardsArray.push(createCard('Moltres', '0146', nanoid()));

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
