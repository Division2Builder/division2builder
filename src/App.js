import React from 'react';
import GearSelection from './components/gearSelection'
import './App.scss';
import Background from './components/shared/background.png'
import Sidebar from "./components/sidebar";
import {Row} from "react-bootstrap";

function App() {
    return (
        <div className="App" style={style}>
            <div className="container appContainer">
                <Row>
                    <Sidebar/>
                    <GearSelection/>
                </Row>
            </div>
        </div>
    );
}

const style = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};

export default App;
