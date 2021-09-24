import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

import { useState } from 'react';

function App() {
  const [algorithm, setalgorithm] = useState("Select an algorithm")
  const [sliderValue, SetSliderValue] = useState(10);
  const [Start, setStart] = useState(false);
  const [Randomize, setRandomize] = useState(false);
  const data = Array.from({length:sliderValue}, () => Math.max(Math.floor(Math.random()*50),1))
  
  return (
    <div className="App">
      <Header sliderValue = {sliderValue} SetSliderValue = {SetSliderValue} currentAlgo = {algorithm} updateAlgo = {setalgorithm} start = {setStart} randomize = {setRandomize}/>
      <Body algorithm = {algorithm} sliderValue = {sliderValue} start = {Start} setStart = {setStart} random = {Randomize} setRandomize = {setRandomize} data = {data}/>
      <Footer/>
    </div>
  );
}

export default App;
