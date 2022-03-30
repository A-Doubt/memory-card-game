import React from 'react';
import Card from './components/Card';
// eslint-disable-next-line no-unused-vars
import { allNewCards, createCard, shuffleArray } from './cardsHelpers';

function App() {

	const [cards, setCards] = React.useState(allNewCards())
	const [gameOver, setGameOver] = React.useState(false)

	const cardsElements = cards.map((card) => {
		return <Card 
		value={card.name}  
		key={card.id} 
		handleClick={() => markCard(card.name)}
		/>
		
	})

	function markCard(value) {
		console.log('markCard')
		console.log(gameOver)
		cards.forEach((card) => {
			if (card.clicked && value === card.name) {
				setGameOver(true)
			}
		})

		if (gameOver) return
		setCards((prevState) => {
			const newArray = prevState.map((card) => {
				return card.name === value ? {...card, clicked: true} : card
			})
			shuffleArray(newArray)
			return newArray
		})

	}
	
	React.useEffect(() => {
		console.log('from useEffect ', gameOver)
	}, [gameOver])

	return (
		<div className='App'>
			<main>
				<h1>Memory game</h1>
				<p>Some random text</p>
				<div className='cards'>
				{cardsElements}
				</div>
			</main>
		</div>
	);
}
	
export default App;
	