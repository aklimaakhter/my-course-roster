
import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Carts from './components/Carts/Carts'

function App() {
  const [selectedCard, setSelectedCard] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalExpenseHour, setTotalExpenseHour] = useState(0)


  const handleSelectedCard = (card) => {
    const isExist = selectedCard.find(item => item.id === card.id);
    let count = card.credit_time_hours;

    if (isExist) {
      return alert('Already showed')
    } else {
      selectedCard.forEach(item => {
        count = count + item.credit_time_hours;
      })
      // console.log(count)
      const remainingHours = 20 - count;
      if (count > 20 || count < 0) {
        return alert('Time limited is over')
      } else {
        setTotalExpenseHour(count);
        setRemaining(remainingHours)
        const newSelectedCard = [...selectedCard, card];
        setSelectedCard(newSelectedCard);
      }

    }


  }


  return (
    <div className='bg-[#F3F3F3] max-w-screen-xl mx-auto md:px-16'>
      <Header></Header>
      <div className='md:flex justify-between'>
        <Home handleSelectedCard={handleSelectedCard}></Home>
        <Carts selectedCard={selectedCard} remaining={remaining} totalExpenseHour={totalExpenseHour}></Carts>

      </div>

    </div>
  )
}

export default App
