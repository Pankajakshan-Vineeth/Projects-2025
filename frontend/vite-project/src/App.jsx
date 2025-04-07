import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer'
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'


function App() {
  return (
      <div>
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path ='/' element ={<Shop/>}/>
          <Route path ='/mens' element ={<ShopCategory banner = {men_banner} category ='men'/>}/>
          <Route path ='/womens' element ={<ShopCategory banner = {women_banner} category ='women'/>}/>
          <Route path ='/kids' element ={<ShopCategory banner = {kid_banner} category ='kid'/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path ='/cart' element ={<Cart/>}/>
          <Route path ='/login' element ={<LoginSignup/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
  )
}

export default App
