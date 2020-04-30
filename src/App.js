import React from 'react';
import Gear from './components/gear'
import './App.scss';
import Background from './components/shared/background.png'
import Sidebar from "./components/sidebar";
import {Row} from "react-bootstrap";
//import Stats from './components/stats';
import TempStats from './components/tempStats';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            majorAttributes: {
                offensive: 0,
                defensive: 0,
                utility: 0
            },
            minorAttributes: {
                offensive: 0,
                defensive: 0,
                utility: 0
            },
            armor: 203600,
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
            mask: {
                name: '',
                type: '',
                brandSet: '',
                armor: 0,
                primaryAttribute: {},
                secondaryAttributes: [],
                talent: {},
                isNamed: false,
                isExotic: false,
                isGearSet: false
            },
            backpack: {
                name: '',
                type: '',
                brandSet: '',
                armor: 0,
                primaryAttribute: {},
                secondaryAttributes: [],
                talent: {},
                isNamed: false,
                isExotic: false,
                isGearSet: false
            },
            vest: {
                name: '',
                type: '',
                brandSet: '',
                armor: 0,
                primaryAttribute: {},
                secondaryAttributes: [],
                talent: {},
                isNamed: false,
                isExotic: false,
                isGearSet: false
            },
            glove: {
                name: '',
                type: '',
                brandSet: '',
                armor: 0,
                primaryAttribute: {},
                secondaryAttributes: [],
                talent: {},
                isNamed: false,
                isExotic: false,
                isGearSet: false
            },
            holster: {
                name: '',
                type: '',
                brandSet: '',
                armor: 0,
                primaryAttribute: {},
                secondaryAttributes: [],
                talent: {},
                isNamed: false,
                isExotic: false,
                isGearSet: false
            },
            kneepads: {
                name: '',
                type: '',
                brandSet: '',
                armor: 0,
                primaryAttribute: {},
                secondaryAttributes: [],
                talent: {},
                isNamed: false,
                isExotic: false,
                isGearSet: false
            }
        };
    };

    updateWeapon = (weapon, position) => {
        this.setState({
            [position] : weapon
        })
    };

    updateArmor = (armor, piece) => {
        let newAttributes = this.state.majorAttributes;
        let newMinorAttributes = this.state.minorAttributes;
        let armorValue = this.state.armor;
        if(this.state[piece].name !== ''){
            newAttributes[this.state[piece].primaryAttribute.type] -= 1;
            this.state[piece].secondaryAttributes.forEach(attribute=>{
                newMinorAttributes[attribute.type] -= 1;
            })
            armorValue -= this.state[piece].armor
        }
        newAttributes[armor.primaryAttribute.type] += 1;
        armor.secondaryAttributes.forEach(attribute=>{
            newMinorAttributes[attribute.type] += 1;
        })
        armorValue += armor.armor
        this.setState({
            [piece] : armor,
            majorAttributes : newAttributes,
            minorAttributes : newMinorAttributes,
            armor: armorValue
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
                        <Gear
                            primary={this.state.primary}
                            secondary={this.state.secondary}
                            mask={this.state.mask}
                            backpack={this.state.backpack}
                            vest={this.state.vest}
                            glove={this.state.glove}
                            holster={this.state.holster}
                            kneepads={this.state.kneepads}
                            updateWeapon={this.updateWeapon}
                            updateArmor={this.updateArmor}
                        />
                    </Row>
                    <Row>
                        <TempStats selectedGear = {this.state}/>
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
