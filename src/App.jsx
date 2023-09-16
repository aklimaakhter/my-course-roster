
import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Carts from './components/Carts/Carts'

function App() {
  const [selectedCard, setSelectedCard] = useState([]);
  const [cards, setCards] = useState([]);

  const handleSelectedCard = (card) => {
    // const isExist = cards.find(item => item.id ===card.id);
    // if (isExist) {
    //   return alert('Already showed')
    // } else {
      
    //   setCards(...cards, card);

    // }
    
    const newSelectedCard = [...selectedCard, card];
    setSelectedCard(newSelectedCard);
  }


  return (
    <div className='bg-[#F3F3F3] max-w-screen-xl mx-auto md:px-16'>
      <Header></Header>
      <div className='md:flex justify-between'>
        <Home handleSelectedCard={handleSelectedCard}></Home>
        <Carts selectedCard={selectedCard}></Carts>
      </div>

    </div>
  )
}

export default App
