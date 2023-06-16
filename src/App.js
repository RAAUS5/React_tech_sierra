// import logo from './logo.svg';
import './App.css';
import Headers from './component/Headers';
import Fotter from './component/Fotter';
import "./component/components.css"
import Background from './component/Backgrounds';
import Bootstrapheader from './component/Bootstrapheader';
import Textarea from './component/Textarea';
import Counter from './component/Counter';
import Stopwatch from './component/Stopwatch';
import "./component/Counter.css";
import UseEffects from './component/UseEffects';
import {BrowserRouter as Browser , Routes,Route} from 'react-router-dom'
import TextSummary from './component/TextSummary';
import User from './component/User';
import { useState } from 'react';
import Toggle from './component/Toggle.css'
import Singlemovies from './component/Singlemovies';
import Randermovies from './component/Randermovies';
import './component/movies.css'
import Products from './component/Product/Products';



function App() {
  const [darkMode, setDarkMode]= useState (false)
  if(darkMode){
    document.body.style.background = "white"
  }else{
    document.body.style.background = "black"
  }
  return (
  <Browser>
  <Headers darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Routes>
      <Route path='/' element = {<Background/>}/>
      <Route path='/movie' element = {<Randermovies/>}/>
      <Route path='/Stopwatch' element = {<Stopwatch/>}/>
      <Route path='/Textarea'  element = {<Textarea/>}/>
      {/* <Route path='/User/:id' element = {<User/>}/> */}
      <Route path='/Products' element = {<Products/>}/>
    </Routes>
    <Fotter/>
  </Browser>
  // <Products/>
  );
}

export default App;
