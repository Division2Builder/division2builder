import React from 'react';
import './statSection.scss'

function StatSection() {
    return (
        <div id="statSection" className="statSection">
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
    );
}

export default StatSection;
