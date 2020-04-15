import React from 'react';
import './breakdown.scss'
import BreakdownItem from "./breakdownItem";

function Breakdown() {
    return (
        <div className="breakdown">
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
    );
}

export default Breakdown;