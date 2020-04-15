import React from 'react';
import Selector, {WeaponCard} from './shared/card';
import './builder.scss'
import Stats from './stats.js'

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
                <div className="createBuildGrid col-xs-12 col-lg-9 row">
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
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#statsModal">
                    View Stats
                </button>
                
                <div class="modal fade" id="statsModal" role="dialog" aria-labelledby="statsModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="statsModalLabel">Stats</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Stats/>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
    
export default GearSelection;
    