import pokemonData from "./pokemonData";

export function createCard(name, number, id) {
	return {
		name: name,
		number: number,
		clicked: false,
	};
}
export function allNewCards() {
	const cardsArray = [];
	pokemonData.pokemon.forEach(ele => {
		cardsArray.push(createCard(ele.name, ele.number))
	})
	shuffleArray(cardsArray);
	return cardsArray;
}

export function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}
