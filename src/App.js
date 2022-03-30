import React from 'react';
import Card from './components/Card';
// eslint-disable-next-line no-unused-vars
import { allNewCards, createCard, shuffleArray } from './cardsHelpers';

function App() {

	const [cards, setCards] = React.useState(allNewCards());
	const [gameOver, setGameOver] = React.useState(false);
	const [currentScore, setCurrentScore] = React.useState(0);
	const [bestScore, setBestScore] = React.useState(0)

	const cardsElements = cards.map((card) => {
		return <Card 
		value={card.number}  
		key={card.id} 
		handleClick={() => markCard(card.number)}
		/>
	})

	function markCard(value) {
		console.log('from markCard', gameOver)
		cards.forEach((card) => {
			if (card.clicked && value === card.number) {
				setGameOver(true);
			}
		})

		setCards((prevState) => {
			const newArray = prevState.map((card) => {
				return card.number === value ? {...card, clicked: true} : card
			})
			shuffleArray(newArray)
			return newArray
		})

		setCurrentScore((prevScore) => {
			return prevScore + 1;
		})
	}

	React.useEffect(() => {
		// game reset will go here
		setCurrentScore((prevScore) => {
			if (prevScore === 0) return 0
			return prevScore - 1;
		})

		console.log('from useEffect gameOver ', gameOver)
	}, [gameOver])

	React.useEffect(() => {
		console.log('from useEffect, best score ', bestScore)

	}, [currentScore])


	function resetGame() {
		setCards(allNewCards());
		setCurrentScore(0);
		setGameOver(false);
	}

	return (
		<div className='App'>
			<main>
				<div className='title'>
					{/* <h1 className='title--main'>Memory game</h1> */}
				</div>
				<img src={require('./assets/logo-bent.png')} alt='pokemon'/>
				<p className='current-score'>
					Current score: {currentScore}
				</p>
				<p className='best-score'>
					Best score: {bestScore}
				</p>
				<div className='cards'>
				{!gameOver && cardsElements}
				</div>
				{gameOver && 
					<button 
						className='reset-btn'
						onClick={resetGame}
					>
							Try again!
					</button>}
			</main>
		</div>
	);
}
	
export default App;
	