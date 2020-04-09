import React from 'react';
import GearSelection from './components/gearSelection'
import './App.css';
import Background from './components/shared/background.png'
import Sidebar from "./components/sidebar";

function App() {
    return (
        <div className="App" style={style}>
            <div className="appContainer">
                <Sidebar/>
                <GearSelection/>
            </div>
            < /div>
    );
}

const style = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};

export default App;
