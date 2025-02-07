import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Shop from './components/Shop';
import Contacts from './components/Contacts';
import Vendors from './components/Vendors';
import Home from './components/Home';
import Blog from './components/Blog';

// import UseStateHook from './components/UseStateHook';
import SinglePage from './components/singlePage';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      {/* <Route path = '/UseStateHook' element = {<UseStateHook/>}/>  */}
      <Route path='/' index element={<Home />}/>
      <Route path='/Shop' element={<Shop />}/>
      <Route path='/Vendors'  element={<Vendors />}/>
      <Route path='/Blog' element={<Blog />}/>
      <Route path='/Contacts'  element={<Contacts />}/>
      
      <Route path='//singleCard/:id' element = {<SinglePage/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
 
  )
}

export default App
