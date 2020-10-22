import React from 'react';
import './App.css';

//Components
import { Header } from '../Header/Header'
import { Category } from '../Category/Category'
import { Cards } from '../Cards/Cards';

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Category />
      <Cards/>
    </div>
  );
}

export default App;
