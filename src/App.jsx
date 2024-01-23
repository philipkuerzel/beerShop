import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import AllBeers from './pages/allBeers/AllBeers'
import ProductDetails from './components/productDetails/ProductDetails'
import RandomBeer from './pages/randomBeers/RandomBeer'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<AllBeers/>}/>
        <Route path='/random' element={<RandomBeer/>}/>
        <Route path='/beers/:beerId' element={<ProductDetails/>}/>
      </Routes>
    </>
  )
}

export default App
