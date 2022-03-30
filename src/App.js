import React from 'react';
import Card from './components/Card';
import { allNewCards, shuffleArray } from './cardsHelpers';

function App() {
	const [cards, setCards] = React.useState(allNewCards());
	const [gameOver, setGameOver] = React.useState(false);
	const [currentScore, setCurrentScore] = React.useState(0);
	const [bestScore, setBestScore] = React.useState(0);
	const [isWin, setIsWin] = React.useState(false);

	const cardsElements = cards.map((card) => {
		return (
			<Card
				value={card.number}
				key={card.number}
				handleClick={() => markCard(card.number)}
			/>
		);
	});

	function markCard(value) {
		cards.forEach((card) => {
			if (card.clicked && value === card.number) {
				setGameOver(true);
			}
			if (!card.clicked && value === card.number) {
				setCurrentScore((prevScore) => {
					return prevScore + 1;
				});
			}
		});

		setCards((prevState) => {
			const newArray = prevState.map((card) => {
				return card.number === value
					? { ...card, clicked: true }
					: card;
			});
			shuffleArray(newArray);
			return newArray;
		});
	}

	React.useEffect(() => {
		if (currentScore > bestScore) setBestScore(currentScore);
		if (currentScore === cards.length) {
			setGameOver(true);
			setIsWin(true);
		}
	}, [currentScore]);

	function resetGame() {
		setCards(allNewCards());
		setCurrentScore(0);
		setGameOver(false);
		setIsWin(false);
	}

	return (
		<div className="App">
			<main>
				<div className="title">
					{/* <h1 className='title--main'>Memory game</h1> */}
				</div>
				<img
					src={require('./assets/logo-bent.png')}
					alt="pokemon"
					className="logo"
				/>
				<div className="score">
					<p className="score--current">
						Current score: {currentScore}
					</p>
					<p className="score--best">Best score: {bestScore}</p>
				</div>
				<div className="cards">{!gameOver && cardsElements}</div>
				{gameOver && (
					<button className="reset-btn" onClick={resetGame}>
						{isWin ? 'You won!' : 'Try again!'}
					</button>
				)}
			</main>
		</div>
	);
}

export default App;
