import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js'
import Containe from './components/container'
import ItemSummary from './components/itemsummary'
import ListItem from './components/ListItem'
import { lchmodSync } from 'fs';
import MyButton from './components/mybutton'

function App() {
  
  const mystyle = {border: 'solid 1 black', maxWidth:`100vw`}
  const mystyle2 = {color: 'red'}
  const st ={height :'500px'}
  return (
    <div style={{ border: 'solid 1 black', maxWidth:`100vw` }}>
      <ListItem/>
    </div>
  );


}

export default App;
