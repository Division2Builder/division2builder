import React from 'react';
import GearSelection from './components/gearSelection'
import './App.css';
import Background from './components/shared/background.png'

function App() {
  return (
    <div className="App" style={style}>
      <GearSelection/>
    </div>
  );
}

var style = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};

export default App;
