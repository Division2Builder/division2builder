import React from 'react';
import GearSelection from './components/gearSelection'
import './App.scss';
import Background from './components/shared/background.png'
import Sidebar from "./components/sidebar";
import {Row} from "react-bootstrap";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            majorAttributes: {
                red: 3,
                blue: 1,
                yellow: 2
            },
            minorAttributes: {
                red: 8,
                blue: 3,
                yellow: 4
            },
            armor: '203.6k',
            health: '127.8k'
        };
    }

    render() {
        return (
            <div className="App" style={style}>
                <div className="container">
                    <Row>
                        <Sidebar
                            majorAttributes={this.state.majorAttributes}
                            minorAttributes={this.state.minorAttributes}
                            armor={this.state.armor}
                            health={this.state.health}
                        />
                        <GearSelection/>
                    </Row>
                </div>
            </div>
        )
    }
}

const style = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};

export default App;
