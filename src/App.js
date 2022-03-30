import React from 'react';
import Card from './components/Card';
import { allNewCards, createCard } from './cardsHelpers';

function App() {

  const [cardsClicked, setCardsClicked] = React.useState([])
  const [cards, setCards] = React.useState(allNewCards())

  const cardsElements = cards.map((card) => {
    return <Card 
      value={card.name}  
      key={card.id} 
      handleClick={() => markCard(card.name)}
    />

  })

  function markCard(value) {
    setCardsClicked((prevState) => {
      return [...prevState, value]
    })
  }

  React.useEffect(() => {
    console.log(cardsClicked)
  }, [cardsClicked])


  
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
