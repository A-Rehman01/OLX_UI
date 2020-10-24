import React,{useEffect} from 'react';
import {Routes,Route} from  'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productdata, AddItems } from '../../Reducer/ProductSlice';

import './App.css';

//Pages
import { Header } from '../Header/Header'
import Home from '../../Pages/Home';
import Product from '../../Pages/Product';

function App() {
  const data = useSelector(productdata);
  console.log(data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AddItems())
  }, [])

  return (
    <div className="AppContainer">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:productid' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
