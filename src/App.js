import React from 'react';
import GearGrid from './components/gearGrid'
import './App.scss';
import Background from './components/shared/background.png'
import Sidebar from "./components/sidebar";
import {Row} from "react-bootstrap";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            majorAttributes: {
                offensive: 3,
                defensive: 1,
                utility: 2
            },
            minorAttributes: {
                offensive: 8,
                defensive: 3,
                utility: 4
            },
            armor: '203.6k',
            health: '127.8k',
            primary: {
                name: "Baker's Dozen",
                type: "rifle",
                damage: 235060,
                talent: {
                    name: "Perfect Lucky Shot", 
                    desc: "Magazine capacity is increased by 30%. Missed shots from cover have a 100% chance to return to the magazine.", 
                    icon: "luckyshot"
                },
                isNamed: true,
                isExotic: false
            },
            secondary: {
                name: "",
                type: "",
                damage: 0,
                talent: {
                    name: "", 
                    desc: "", 
                    icon: ""
                },
                isNamed: false,
                isExotic: false
            },
        };
    };

    updateWeapon = (weapon, position) => {
        this.setState({
            [position] : weapon
        })
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
                        <GearGrid
                            primary={this.state.primary}
                            secondary={this.state.secondary}
                            updateWeapon={this.updateWeapon}
                        />
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
