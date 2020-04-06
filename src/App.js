import React from 'react';
import GearSelection from './components/gearSelection';
import './App.css';
import Background from './components/shared/background.png';
import DetailedStats from "./components/detailedStats";

function App() {
  return (
    <div className="App" style={style}>
      <GearSelection/>
      <DetailedStats/>
    </div>
  );
}

const style = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};

export default App;
