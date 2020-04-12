import React from 'react';
import Selector, {WeaponCard} from './shared/card';
import './builder.css'

class GearSelection extends React.Component {
    state={
        itemClicked: "",
        primary: {
            name: "Baker's Dozen",
            type: "rifle",
            damage: 235060,
            talent: {
                name: "Perfect Lucky Shot", 
                desc: "Magazine capacity is increased by 30%. Missed shots from cover have a 100% chance to return to the magazine.", 
                icon: "luckyshot"
            },
            isNamed: true
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
            isNamed: false
        },
    }

    render() {
        return (
            <>
                {this.state.itemClicked !== "" && (
                    <div></div>
                )}
                <div className="createBuildGrid">
                    <Selector
                        category="signature"
                        isSelected
                        specialization="sharpshooter"
                    />
                    <Selector
                        category="gernade"
                    />
                    <WeaponCard
                        weapon={this.state.primary}
                        context="primary"
                    />
                    <WeaponCard
                        weapon={this.state.secondary}
                        context="secondary"
                    />
                    <Selector
                        category="sidearm"
                    />
                    <Selector
                        category="armor"
                        armorPiece="mask"
                    />
                    <Selector
                        isSelected
                        name="Yaahl Pack"
                        category="armor"
                        armorPiece="backpack"
                    />
                    <Selector
                        category="armor"
                        armorPiece="vest"
                    />
                    <Selector
                        category="armor"
                        armorPiece="glove"
                    />
                    <Selector
                        category="armor"
                        armorPiece="holster"
                    />
                    <Selector
                        category="armor"
                        armorPiece="kneepads"
                    />
                    <Selector
                        category="skill"
                    />
                    <Selector
                        category="skill"
                    />
                </div>
            </>
        );
    }
}
    
export default GearSelection;
    