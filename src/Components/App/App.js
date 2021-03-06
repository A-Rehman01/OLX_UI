import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddItems } from '../../Reducer/ProductSlice';

import './App.css';

//Components
import { Header } from '../Header/Header'
import Footer from '../Footer';

//Pages
import Home from '../../Pages/Home';
import Product from '../../Pages/Product';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      dispatch(AddItems())
    }
    getData();
  }, [dispatch])

  return (
    <div className="AppContainer">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:productid' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
