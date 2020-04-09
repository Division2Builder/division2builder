import React from 'react';
import './stats.css'
import Vest from '../icons/gear_types/vest.png'
import BreakdownItem from "./breakdownItem";

function Stats() {
    return (
        <div className="statsGrid">
            <div className="grid sectionSelectionGrid">
                <img className="dsIco" src={Vest} alt="logo"/>
                <img className="dsIco" src={Vest} alt="logo"/>
                <img className="dsIco" src={Vest} alt="logo"/>
                <img className="dsIco" src={Vest} alt="logo"/>
                <img className="dsIco" src={Vest} alt="logo"/>
                <img className="dsIco" src={Vest} alt="logo"/>
                <img className="dsIco" src={Vest} alt="logo"/>
                <img className="dsIco" src={Vest} alt="logo"/>
            </div>
            <div className="grid statValuesGrid">
                <div className="statSection">
                    <h6>Section Name</h6>
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
                <div className="statSection">
                    <h6>Section Name</h6>
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
                <div className="statSection">
                    <h6>Section Name</h6>
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
                <div className="statSection">
                    <h6>Section Name</h6>
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
                <div className="statSection">
                    <h6>Section Name</h6>
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
                <div className="statSection">
                    <h6>Section Name</h6>
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
                <div className="statSection">
                    <h6>Section Name</h6>
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
                <div className="statSection">
                    <h6>Section Name</h6>
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
    