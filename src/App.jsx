
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  

  return (
    <div className='bg-[#F3F3F3] max-w-screen-xl mx-auto md:px-16'>
      <Header></Header>
      <div className='md:flex justify-between items-center'>
        <Home></Home>
        <Cart></Cart>
      </div>
      
    </div>
  )
}

export default App
