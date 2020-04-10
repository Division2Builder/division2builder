import React from 'react';
import './stats.css'
import Vest from '../icons/gear_types/vest.png'
import BreakdownItem from "./breakdownItem";

function Stats() {
    return (
        <div className="statsGrid">
            <div className="grid sectionSelectionGrid">
                <img onClick="" name="weaponTalents" className="dsIco" src={Vest} alt="logo"/>
                <img onClick="" name="weaponStats" className="dsIco" src={Vest} alt="logo"/>
                <img onClick="" name="offense" className="dsIco" src={Vest} alt="logo"/>
                <img onClick="" name="gearTalents" className="dsIco" src={Vest} alt="logo"/>
                <img onClick="" name="gearBrands" className="dsIco" src={Vest} alt="logo"/>
                <img onClick="" name="defense" className="dsIco" src={Vest} alt="logo"/>
                <img onClick="" name="ss1" className="dsIco" src={Vest} alt="logo"/>
                <img onClick="" name="ss2" className="dsIco" src={Vest} alt="logo"/>
            </div>
            <div className="grid statValuesGrid">
                <div id="weaponTalents" className="statSection">
                    <h6>Weapon Talents</h6>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                </div>
                <div id="weaponStats" className="statSection">
                    <h6>Weapon Stats</h6>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                </div>
                <div id="offense" className="statSection">
                    <h6>Offense</h6>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                </div>
                <div id="gearTalents" className="statSection">
                    <h6>Gear Talents</h6>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                </div>
                <div id="gearBrands" className="statSection">
                    <h6>Gear Brands/Sets</h6>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                </div>
                <div id="defense" className="statSection">
                    <h6>Defense</h6>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                </div>
                <div id="ss1" className="statSection">
                    <h6>Skill Slot 1</h6>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                </div>
                <div id="ss2" className="statSection">
                    <h6>Skill Slot 2</h6>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                    <div className="stat">
                        <span className="statAmount">123,456</span>
                        <span className="statName">Stat Name</span>
                    </div>
                </div>
            </div>
            <div className="grid statBreakdownGrid">
                <h2>Breakdown</h2>
                <div className="breakdownDescription">
                    <h5>Killer</h5>
                    <p>the description</p>
                </div>
                <div className="breakdownItems">
                    <p>Found on:</p>
                    <div>
                        <BreakdownItem/>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default Stats;
    